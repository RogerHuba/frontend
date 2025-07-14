#!/bin/bash

# SWG Infinity - Pre-deployment verification script

echo "🚀 SWG Infinity Frontend - Deployment Verification"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Found package.json"

# Check if Next.js is installed
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx not found. Please install Node.js and npm."
    exit 1
fi

echo "✅ npx is available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run type checking
echo "🔍 Running TypeScript type checking..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ Error: TypeScript compilation failed"
    exit 1
fi

echo "✅ TypeScript types are valid"

# Test build
echo "🏗️  Testing production build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Production build failed"
    exit 1
fi

echo "✅ Production build successful"

# Check for required files
echo "📋 Checking deployment files..."

required_files=("vercel.json" "next.config.js" ".vercelignore")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ Found $file"
    else
        echo "⚠️  Warning: $file not found (optional but recommended)"
    fi
done

echo ""
echo "🎉 Deployment verification complete!"
echo ""
echo "Your SWG Infinity frontend is ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Push your code to Git repository"
echo "2. Connect repository to Vercel"
echo "3. Deploy with 'vercel' command or via Vercel dashboard"
echo ""
echo "For detailed instructions, see VERCEL_DEPLOYMENT.md"
