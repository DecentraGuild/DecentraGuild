/**
 * Resize CustomSkinmodule.webp to 50% of original dimensions
 */

import sharp from 'sharp'
import { writeFile, stat, copyFile, unlink } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function resizeSkin() {
  const filePath = join(__dirname, '..', '..', 'public', 'alacarte', 'CustomSkinmodule.webp')
  const tempPath = filePath + '.resized'
  
  try {
    const input = sharp(filePath)
    const metadata = await input.metadata()
    
    console.log(`Current dimensions: ${metadata.width}x${metadata.height}`)
    
    const originalStats = await stat(filePath)
    console.log(`Current size: ${(originalStats.size / 1024).toFixed(1)} KB`)
    
    const newWidth = Math.round(metadata.width * 0.5)
    const newHeight = Math.round(metadata.height * 0.5)
    
    console.log(`Resizing to: ${newWidth}x${newHeight} (50%)`)
    
    const output = await input
      .resize({
        width: newWidth,
        height: newHeight,
        fit: 'contain'
      })
      .webp({ 
        quality: 75,
        effort: 6
      })
      .toBuffer()
    
    // Write resized image
    await writeFile(tempPath, output)
    
    console.log(`✓ Resized image saved to: CustomSkinmodule.webp.resized`)
    
    const newStats = await stat(tempPath)
    const savings = ((1 - output.length / originalStats.size) * 100).toFixed(1)
    
    console.log(`\n📊 Results:`)
    console.log(`Original: ${metadata.width}x${metadata.height} - ${(originalStats.size / 1024).toFixed(1)} KB`)
    console.log(`Resized: ${newWidth}x${newHeight} - ${(newStats.size / 1024).toFixed(1)} KB`)
    console.log(`Size reduction: ${savings}%`)
    console.log(`\n💡 To complete: Manually rename the .resized file to replace the original`)
    
  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

resizeSkin()

