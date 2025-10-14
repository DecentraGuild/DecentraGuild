/**
 * Alacarte Images Optimization Script
 * 
 * Optimizes images specifically for the Build-Your-Own page
 * for better GitHub Pages performance.
 */

import { readdir, stat, readFile, writeFile } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..', '..', '..')

const ALACARTE_DIR = join(__dirname, 'public', 'alacarte')

// Optimization settings for different image types
const OPTIMIZATION_SETTINGS = {
  // For large images like CustomSkinmodule
  large: {
    quality: 70,
    effort: 6,
    maxWidth: 1200,
    maxHeight: 800
  },
  // For medium images
  medium: {
    quality: 80,
    effort: 6,
    maxWidth: 1000,
    maxHeight: 600
  },
  // For small images
  small: {
    quality: 85,
    effort: 6,
    maxWidth: 800,
    maxHeight: 500
  }
}

const stats = {
  total: 0,
  optimized: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  optimizedSize: 0
}

async function getImageFiles() {
  const files = await readdir(ALACARTE_DIR)
  return files.filter(file => file.endsWith('.webp'))
}

function getOptimizationSettings(fileSize) {
  if (fileSize > 800000) return OPTIMIZATION_SETTINGS.large // > 800KB
  if (fileSize > 300000) return OPTIMIZATION_SETTINGS.medium // > 300KB
  return OPTIMIZATION_SETTINGS.small
}

async function optimizeImage(imagePath) {
  try {
    const originalBuffer = await readFile(imagePath)
    const originalSize = originalBuffer.length
    const settings = getOptimizationSettings(originalSize)
    
    // Create optimized version
    const optimizedBuffer = await sharp(imagePath)
      .resize(settings.maxWidth, settings.maxHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: settings.quality, 
        effort: settings.effort 
      })
      .toBuffer()
    
    const optimizedSize = optimizedBuffer.length
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1)
    
    // Only replace if we achieved significant savings
    if (savings > 5) {
      await writeFile(imagePath, optimizedBuffer)
      console.log(`✓ ${basename(imagePath)}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${savings}% smaller)`)
      
      stats.optimized++
      stats.originalSize += originalSize
      stats.optimizedSize += optimizedSize
    } else {
      console.log(`- ${basename(imagePath)}: Already optimized (${savings}% savings)`)
      stats.skipped++
    }
    
    return true
  } catch (error) {
    console.error(`✗ Failed to optimize ${basename(imagePath)}:`, error.message)
    stats.failed++
    return false
  }
}

async function main() {
  console.log('🖼️  Alacarte Images Optimization\n')
  console.log(`Scanning: ${ALACARTE_DIR}\n`)

  try {
    const imageFiles = await getImageFiles()
    stats.total = imageFiles.length

    if (imageFiles.length === 0) {
      console.log('No WebP images found to optimize.')
      return
    }

    console.log(`Found ${imageFiles.length} images to optimize\n`)

    // Optimize all images
    for (const imageFile of imageFiles) {
      const imagePath = join(ALACARTE_DIR, imageFile)
      await optimizeImage(imagePath)
    }

    // Print summary
    console.log('\n📊 Optimization Summary:')
    console.log('─'.repeat(50))
    console.log(`Total images:     ${stats.total}`)
    console.log(`Optimized:        ${stats.optimized}`)
    console.log(`Skipped:          ${stats.skipped}`)
    console.log(`Failed:           ${stats.failed}`)
    
    if (stats.optimized > 0) {
      console.log(`Original size:    ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`)
      console.log(`Optimized size:   ${(stats.optimizedSize / 1024 / 1024).toFixed(2)} MB`)
      console.log(`Total savings:    ${((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1)}%`)
      console.log(`Space saved:      ${((stats.originalSize - stats.optimizedSize) / 1024 / 1024).toFixed(2)} MB`)
    }
    
    console.log('─'.repeat(50))
    console.log('\n✅ Alacarte images optimization complete!')
    console.log('\n💡 GitHub Pages Performance Tips:')
    console.log('1. Images are now optimized for faster loading')
    console.log('2. Lazy loading is implemented for better UX')
    console.log('3. Critical images are preloaded in the HTML head')
    console.log('4. Consider using a CDN for even better performance')

  } catch (error) {
    console.error('Error during optimization:', error)
    process.exit(1)
  }
}

main()
