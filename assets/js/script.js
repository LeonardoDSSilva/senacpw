document.querySelector("#moeda_primaria").addEventListener("change", () => atualizarMoeda(1));
document.querySelector("#moeda_secundaria").addEventListener("change", () => atualizarMoeda(2));
document.querySelector("#valor_primario").addEventListener("change", () => atualizarMoeda(1));
document.querySelector("#valor_secundario").addEventListener("change", () => atualizarMoeda(2));


function atualizarMoeda(qual_valor) {

	const dolar = 5.50;
	const euro = 6.50;


	let moeda_primaria = document.querySelector("#moeda_primaria").value;
	let valor_primario = document.querySelector("#valor_primario").value;

	let moeda_secundaria = document.querySelector("#moeda_secundaria").value;
	let valor_secundario = document.querySelector("#valor_secundario").value;



	if (qual_valor === 1) {
		switch (moeda_primaria) {
			case "BRL":
				if (moeda_secundaria === "USD") {
					resultado = valor_primario / dolar;
				} else if (moeda_secundaria === "EUR") {
					resultado = valor_primario / euro;
				}
				break;
			case "USD":
				if (moeda_secundaria === "BRL") {
					resultado = valor_primario * dolar;
				}
				break;
			case "EUR":
				if (moeda_secundaria === "BRL") {
					resultado = valor_primario * euro;
				}
				break;
		}
		document.querySelector("#valor_secundario").value = resultado.toFixed(2);
	} else if (qual_valor === 2) {
		switch (moeda_secundaria) {
			case "BRL":
				if (moeda_primaria === "USD") {
					resultado = valor_secundario * dolar;
				} else if (moeda_primaria === "EUR") {
					resultado = valor_secundario * euro;
				}
				break;
			case "USD":
				if (moeda_primaria === "BRL") {
					resultado = valor_secundario / dolar;
				}
				break;
			case "EUR":
				if (moeda_primaria === "BRL") {
					resultado = valor_secundario / euro;
				}
				break;
		}
		document.querySelector("#valor_primario").value = resultado.toFixed(2);
	}
}