document.addEventListener('DOMContentLoaded', function() {
    const carrito = [];
    const carritoContenido = document.getElementById('carrito-contenido');
    const productosCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const carritoElement = document.getElementById('carrito');
    const categorias = document.querySelectorAll('.categoria');
    const secciones = document.querySelectorAll('main section');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    function actualizarCarrito() {
        let total = 0;
        productosCarrito.innerHTML = '';
        carrito.forEach(producto => {
            const item = document.createElement('div');
            item.classList.add('carrito-item');
            item.textContent = `${producto.nombre} - COP $${producto.precio}`;
            productosCarrito.appendChild(item);
            total += producto.precio;
        });
        totalCarrito.textContent = `Total: COP $${total.toFixed(3)}`;
    }

    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const precio = parseFloat(this.getAttribute('data-precio'));
            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    carritoElement.addEventListener('click', function() {
        carritoContenido.style.display = carritoContenido.style.display === 'none' || carritoContenido.style.display === '' ? 'block' : 'none';
    });

    categorias.forEach(categoria => {
        categoria.addEventListener('click', function(event) {
            event.preventDefault();
            const categoriaSeleccionada = this.getAttribute('data-categoria');

            secciones.forEach(seccion => {
                if (seccion.id === categoriaSeleccionada) {
                    seccion.style.display = 'block';
                    window.scrollTo({
                        top: seccion.offsetTop - 100,
                        behavior: 'smooth'
                    });
                } else {
                    seccion.style.display = 'none';
                }
            });

            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });


    secciones.forEach((seccion) => {
        if (seccion.id !== 'home') seccion.style.display = 'none';
    });


    document.getElementById('inicio').addEventListener('click', function(event) {
        event.preventDefault();
        secciones.forEach(seccion => {
            if (seccion.id === 'home') {
                seccion.style.display = 'block';
                window.scrollTo({
                    top: seccion.offsetTop - 100,
                    behavior: 'smooth'
                });
            } else {
                seccion.style.display = 'none';
            }
        });

        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
        }
    });


    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
