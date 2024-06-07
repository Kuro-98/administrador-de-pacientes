const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaeInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');

pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaeInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

const citaObj = {
	paciente: '',
	propietario: '',
	email: '',
	fecha: '',
	sintomas: '',
};

function datosCita(e) {
	citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
	e.preventDefault();

	if (Object.values(citaObj).some((valor) => valor.trim() === '')) {
		new Notificacion({ texto: 'Todos los campos son obligatorios', tipo: 'error' });
		notificacion.mostrar();
		return;
	}
}

class Notificacion {
	constructor({ texto, tipo }) {
		this.texto = texto;
		this.tipo = tipo;
		this.mostrar();
	}

	mostrar() {
		//crear la notificacion
		const notificacion = document.createElement('div');
		notificacion.classList.add(
			'text-center',
			'w-full',
			'p-3',
			'text-white',
			'my-5',
			'alert',
			'uppercase',
			'font-bold',
			'text-sm',
		);

		this.tipo === 'error' ? notificacion.classList.add('bg-red-500') : notificacion.classList.add('bg-green-500');

		notificacion.textContent = this.texto;

		//insertar en el DOM
		formulario.parentElement.insertBefore(notificacion, formulario);
	}
}
