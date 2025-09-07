const model = document.querySelector('.greek-statue');
    model.addEventListener('mousemove', (e) => {
      const rect = model.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = x / rect.width - 0.5;
      const centerY = y / rect.height - 0.5;
      const shadowX = centerX * 100;
      const shadowY = centerY * 100;
      model.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(248, 243, 243, 0.926)`;
    });

    model.addEventListener('mouseleave', () => {
      model.style.boxShadow = 'none';
    });

    window.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 1000);
      }, 1000); 
    });