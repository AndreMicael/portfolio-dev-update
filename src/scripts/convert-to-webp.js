import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';

(async () => {
  try {
    const files = await imagemin(['src/assets/images/*.{jpg,png}'], {
      destination: 'src/assets/images/webp',
      plugins: [
        imageminWebp({ quality: 85 })
      ]
    });

    console.log('Imagens convertidas:', files);
  } catch (error) {
    console.error('Erro na conversão:', error);
  }
})();
