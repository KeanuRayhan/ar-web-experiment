document.addEventListener('DOMContentLoaded', function () {
    const arButton = document.getElementById('ar-button');
    const scene = document.querySelector('a-scene');
    const gltfModel = document.getElementById('gltf-model');

    // Load the GLTF Model
    gltfModel.setAttribute('gltf-model', 'url(../models/scene.gltf)');

    arButton.addEventListener('click', () => {
        scene.style.display = 'block';
        arButton.style.display = 'none';
    });
});
