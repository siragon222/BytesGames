
const modules = import.meta.glob('./*.webp', { eager: true, as: 'url' });

const ImageData = {};
for (const path in modules) {
  const fileName = path.split('/').pop().replace(/\.(webp)$/, '');
  ImageData[fileName] = modules[path];
}

export default ImageData; 