#!/usr/bin/env python3
"""
Create a custom OG image for Viet Ecotex
Dimensions: 1200x630 (Facebook/LinkedIn optimal)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
WIDTH = 1200
HEIGHT = 630
BG_COLOR = (26, 107, 107)  # #1A6B6B - brand green from theme-color
TEXT_COLOR = (255, 255, 255)  # White
LOGO_PATH = 'public/logo.png'
OUTPUT_PATH = 'public/og-image.png'

def create_og_image():
    # Create base image with brand color
    img = Image.new('RGB', (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Try to load logo
    logo = None
    if os.path.exists(LOGO_PATH):
        try:
            logo = Image.open(LOGO_PATH)
            # Convert to RGBA if needed
            if logo.mode != 'RGBA':
                logo = logo.convert('RGBA')
        except Exception as e:
            print(f"Warning: Could not load logo: {e}")
    
    # Calculate positions
    padding = 60
    logo_size = 200  # Height for logo
    headline_y = HEIGHT // 2 - 40
    
    # Add logo if available
    if logo:
        # Resize logo maintaining aspect ratio
        logo_ratio = logo.width / logo.height
        logo_width = int(logo_size * logo_ratio)
        logo_resized = logo.resize((logo_width, logo_size), Image.Resampling.LANCZOS)
        
        # Center logo horizontally
        logo_x = (WIDTH - logo_width) // 2
        logo_y = padding
        
        # Paste logo with transparency support
        if logo_resized.mode == 'RGBA':
            # Create a white background for the logo area (optional - remove if logo has background)
            paste_mask = logo_resized.split()[3]  # Alpha channel
            img.paste(logo_resized, (logo_x, logo_y), paste_mask)
        else:
            img.paste(logo_resized, (logo_x, logo_y))
        
        # Adjust headline position
        headline_y = logo_y + logo_size + 40
    else:
        # No logo, center text vertically
        headline_y = HEIGHT // 2
    
    # Add headline text - professional typography
    headline = "Eco Microfiber Leather"
    subheadline = "Viet Ecotex"
    tagline = "Sustainable Materials for Modern Applications"
    
    # Try to use system fonts - prefer bold/semibold for impact
    try:
        headline_font_size = 72
        subheadline_font_size = 56
        tagline_font_size = 32
        
        # Try Helvetica Neue Bold (better for headlines)
        try:
            # Try different font weights
            headline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", headline_font_size)
            subheadline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", subheadline_font_size)
            tagline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", tagline_font_size)
        except:
            try:
                headline_font = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", headline_font_size)
                subheadline_font = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", subheadline_font_size)
                tagline_font = ImageFont.truetype("/System/Library/Fonts/HelveticaNeue.ttc", tagline_font_size)
            except:
                try:
                    headline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", headline_font_size)
                    subheadline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", subheadline_font_size)
                    tagline_font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", tagline_font_size)
                except:
                    # Fallback to default font
                    headline_font = ImageFont.load_default()
                    subheadline_font = ImageFont.load_default()
                    tagline_font = ImageFont.load_default()
    except:
        headline_font = ImageFont.load_default()
        subheadline_font = ImageFont.load_default()
        tagline_font = ImageFont.load_default()
    
    # Calculate text positions (centered)
    if logo:
        # With logo: text goes below logo
        text_start_y = logo_y + logo_size + 50
    else:
        # No logo: center text vertically
        text_start_y = HEIGHT // 2 - 60
    
    # Get text dimensions for centering
    headline_bbox = draw.textbbox((0, 0), headline, font=headline_font)
    headline_width = headline_bbox[2] - headline_bbox[0]
    headline_height = headline_bbox[3] - headline_bbox[1]
    
    subheadline_bbox = draw.textbbox((0, 0), subheadline, font=subheadline_font)
    subheadline_width = subheadline_bbox[2] - subheadline_bbox[0]
    subheadline_height = subheadline_bbox[3] - subheadline_bbox[1]
    
    tagline_bbox = draw.textbbox((0, 0), tagline, font=tagline_font)
    tagline_width = tagline_bbox[2] - tagline_bbox[0]
    
    # Draw subheadline first (brand name, smaller)
    subheadline_x = (WIDTH - subheadline_width) // 2
    subheadline_y = text_start_y
    draw.text((subheadline_x, subheadline_y), subheadline, fill=TEXT_COLOR, font=subheadline_font)
    
    # Draw headline (main text, larger, bold)
    headline_x = (WIDTH - headline_width) // 2
    headline_y = subheadline_y + subheadline_height + 15
    draw.text((headline_x, headline_y), headline, fill=TEXT_COLOR, font=headline_font)
    
    # Draw tagline (description, smaller, lighter)
    tagline_x = (WIDTH - tagline_width) // 2
    tagline_y = headline_y + headline_height + 25
    # Slightly lighter color for tagline
    tagline_color = (240, 240, 240)  # Light gray
    draw.text((tagline_x, tagline_y), tagline, fill=tagline_color, font=tagline_font)
    
    # Save the image
    img.save(OUTPUT_PATH, 'PNG', optimize=True)
    print(f"✅ OG image created successfully: {OUTPUT_PATH}")
    print(f"   Dimensions: {WIDTH}x{HEIGHT}")
    
    return OUTPUT_PATH

if __name__ == '__main__':
    create_og_image()

