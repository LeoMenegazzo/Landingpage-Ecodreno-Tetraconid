$(document).on("click", '.back-start', function(event) {
	$("#col-quiz").load(location.href + " #quiz");
});

$(document).on("click", '.back-products', function(event) {
	data = {'back-products': 1};
	loadForm(data);
});

$(document).on("click", '.back-question', function(event) {
	data = {'back-question': 1};
	loadForm(data);
});

$(document).on("click", '.answer', function(event) {

    loadForm();
    loadProducts();
	
});

$('#quiz').submit(  function(event){
	event.preventDefault();
	loadForm();
	loadProducts();
});

$(document).ready(function() {
    loadProducts();
});

$(document).on("click", '.delete-product', function(event) {

  	event.preventDefault();

    data = {'delete-product': $(this).attr('href')};

	$.ajax({
        type: "POST",
        url: '../wp-content/themes/container/orcamento/app/functions.php',
        data: data,
        beforeSend: function() {
            $('#products').html('Deletando...');
        },   
        success: function(data)
        {
            loadProducts();
        }
    });

});

function loadProducts(){
	data = {'load-products': 1};

	$.ajax({
        type: "POST",
        url: '../wp-content/themes/container/orcamento/app/functions.php',
        data: data,
        beforeSend: function() {
            //
        },   
        success: function(data)
        {
            if(data != ''){
              	$('#products').html(data);
            }
        }
    });
}

function loadForm(data){
	if(!data){
		data = $('#quiz').serialize();
	}

	$.ajax({
        type: "POST",
        url: '../wp-content/themes/container/orcamento/app/functions.php',
        data: data,
        beforeSend: function() {
            $('#quiz').html('Carregando...');
        },   
        success: function(data)
        {
            if(data == 'redirect-detalhamento' || data == 'redirect-contato'){
                if(data == 'redirect-detalhamento'){
                    window.location.href = "../wp-content/themes/container/orcamento/detalhamento.php";
                }

                if(data == 'redirect-contato'){
                    window.location.href = "../wp-content/themes/container/orcamento/contato.php";
                }
            } else {
                $('#quiz').html(data);
            }
            
        }
    });
}