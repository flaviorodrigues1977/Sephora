$(function(){
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 50) {
	       $('.header-shop').addClass('fixed');
	    }
	    else {
	       $('.header-shop').removeClass('fixed');
	    }
	});

	$('.grid-escolha-preco ul.tabs li').click(function(){
		var price_id = $(this).attr('data-tab');
		$('.grid-escolha-preco ul.tabs li').removeClass('current');
		$('.grid-escolha-preco .tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+price_id).addClass('current');
	});

	$('.grid-escolha-oferta ul.tabs li').click(function(){
		var price_id = $(this).attr('data-tab');
		$('.grid-escolha-oferta ul.tabs li').removeClass('current');
		$('.grid-escolha-oferta .tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+price_id).addClass('current');
	});

	$('.beauty-club a').click(function(){
		$('.submenu.club').toggle('fast');
		$('.beauty-club .icon-chevron-down').toggleClass('icon-chevron-up');
	});

	$('.input-search').click(function(){
		$('.neemuclone').fadeIn(300);
		$('.lightbox-neemu').fadeIn(200);
	});

	$('.lightbox-neemu').click(function(){
		$('.neemuclone').fadeOut(300);
		$('.lightbox-neemu').fadeOut(200);
	});


	$(document).ready(function () {
	    $('.accordion-toggle').on('click', function(event){
	    	event.preventDefault();
	    	// create accordion variables
	    	var accordion = $(this);
	    	var accordionContent = accordion.next('.accordion-content');
	    	$('.accordion-toggle .icon-chevron-down').toggleClass('icon-chevron-up');
	    	// toggle accordion link open class
	    	accordion.toggleClass("open");
	    	// toggle accordion content
	    	accordionContent.slideToggle(250);
	    	
	    });
	});


	$('.menu-category a').each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
	        $this.remove();
	});

	$(document).on("click","a[href^='#']",function(e){
		var href=$(this).attr("href"),target=$(href).parents(".mCustomScrollbar"); 
			if(target.length){
				e.preventDefault();
			target.mCustomScrollbar("scrollTo",href);
		}
	});

	$.getJSON('scripts/products.json', function(data){
		
		var qtd200;
		var return200;

		this.qtd200 = data.filter200.length;
		this.return200 = '';

		for (i = 0; i < this.qtd200; i++){
			this.return200 += '<li class="slide" id=' + data.filter200[i].sku + '><div class="product-item">';
			this.return200 += '<span class="flag-discount ' + data.filter200[i].discount + '">' + data.filter200[i].discount + '</span>';
			this.return200 += '<img class="img-product" src=/sephora/' + data.filter200[i].image + ' />';
			this.return200 += '<div class="box-rating"><div class="rating" style="width:' + data.filter200[i].rating + '"></div></div>';
			this.return200 += '<div class=' + data.filter200[i].local + '>' + data.filter200[i].local + '</div>';
			this.return200 += '<div class="product">' + data.filter200[i].product + '</div>';
			this.return200 += '<div class="description">' + data.filter200[i].description + '</div>';
			this.return200 += '<div class="outprice ' + data.filter200[i].outprice + '">R$ ' + data.filter200[i].outprice + '</div>';
			this.return200 += '<div class="price">R$ ' + data.filter200[i].price + '</div>';
			this.return200 += '<div class="parcel">' + data.filter200[i].parcel + 'x R$ ' + data.filter200[i].valueparcel + '</div>';
			this.return200 += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
			this.return200 += '<div class=' + data.filter200[i].frete + '>' + data.filter200[i].frete + '</div>';
		}
		$('#price-200').html('<ul class="gridslider">' + this.return200 + '</ul>');
		$('.gridslider').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });

		$('#tab200').click(function(){
			var qtd200;
			var return200;

			this.qtd200 = data.filter200.length;
			this.return200 = '';

			for (i = 0; i < this.qtd200; i++){
				this.return200 += '<li class="slide" id=' + data.filter200[i].sku + '><div class="product-item">';
				this.return200 += '<span class="flag-discount ' + data.filter200[i].discount + '">' + data.filter200[i].discount + '</span>';
				this.return200 += '<img class="img-product" src=/sephora/' + data.filter200[i].image + ' />';
				this.return200 += '<div class="box-rating"><div class="rating" style="width:' + data.filter200[i].rating + '"></div></div>';
				this.return200 += '<div class=' + data.filter200[i].local + '>' + data.filter200[i].local + '</div>';
				this.return200 += '<div class="product">' + data.filter200[i].product + '</div>';
				this.return200 += '<div class="description">' + data.filter200[i].description + '</div>';
				this.return200 += '<div class="outprice ' + data.filter200[i].outprice + '">R$ ' + data.filter200[i].outprice + '</div>';
				this.return200 += '<div class="price">R$ ' + data.filter200[i].price + '</div>';
				this.return200 += '<div class="parcel">' + data.filter200[i].parcel + 'x R$ ' + data.filter200[i].valueparcel + '</div>';
				this.return200 += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.return200 += '<div class=' + data.filter200[i].frete + '>' + data.filter200[i].frete + '</div>';
			}
			$('#price-200').html('<ul class="gridslider">' + this.return200 + '</ul>');
			$('.gridslider').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		$('#tab120').click(function(){
			var qtd120;
			var return120;

			this.qtd120 = data.filter120.length;
			this.return120 = '';

			for (i = 0; i < this.qtd120; i++){
				this.return120 += '<li class="slide" id=' + data.filter120[i].sku + '><div class="product-item">';
				this.return120 += '<span class="flag-discount ' + data.filter120[i].discount + '">' + data.filter120[i].discount + '</span>';
				this.return120 += '<img class="img-product" src=/sephora/' + data.filter120[i].image + ' />';
				this.return120 += '<div class="box-rating"><div class="rating" style="width:' + data.filter120[i].rating + '"></div></div>';
				this.return120 += '<div class=' + data.filter120[i].local + '>' + data.filter120[i].local + '</div>';
				this.return120 += '<div class="product">' + data.filter120[i].product + '</div>';
				this.return120 += '<div class="description">' + data.filter120[i].description + '</div>';
				this.return120 += '<div class="outprice ' + data.filter120[i].outprice + '">R$ ' + data.filter120[i].outprice + '</div>';
				this.return120 += '<div class="price">R$ ' + data.filter120[i].price + '</div>';
				this.return120 += '<div class="parcel">' + data.filter120[i].parcel + 'x R$ ' + data.filter120[i].valueparcel + '</div>';
				this.return120 += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.return120 += '<div class=' + data.filter120[i].frete + '>' + data.filter120[i].frete + '</div>';
			}
			$('#price-120').html('<ul class="gridslider">' + this.return120 + '</ul>');
			$('.gridslider').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		$('#tab80').click(function(){
			var qtd80;
			var return80;

			this.qtd80 = data.filter80.length;
			this.return80 = '';

			for (i = 0; i < this.qtd80; i++){
				this.return80 += '<li class="slide" id=' + data.filter80[i].sku + '><div class="product-item">';
				this.return80 += '<span class="flag-discount ' + data.filter80[i].discount + '">' + data.filter80[i].discount + '</span>';
				this.return80 += '<img class="img-product" src=/sephora/' + data.filter80[i].image + ' />';
				this.return80 += '<div class="box-rating"><div class="rating" style="width:' + data.filter80[i].rating + '"></div></div>';
				this.return80 += '<div class=' + data.filter80[i].local + '>' + data.filter80[i].local + '</div>';
				this.return80 += '<div class="product">' + data.filter80[i].product + '</div>';
				this.return80 += '<div class="description">' + data.filter80[i].description + '</div>';
				this.return80 += '<div class="outprice ' + data.filter80[i].outprice + '">R$ ' + data.filter80[i].outprice + '</div>';
				this.return80 += '<div class="price">R$ ' + data.filter80[i].price + '</div>';
				this.return80 += '<div class="parcel">' + data.filter80[i].parcel + 'x R$ ' + data.filter80[i].valueparcel + '</div>';
				this.return80 += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.return80 += '<div class=' + data.filter80[i].frete + '>' + data.filter80[i].frete + '</div>';
			}
			$('#price-80').html('<ul class="gridslider">' + this.return80 + '</ul>');
			$('.gridslider').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		$('#tab40').click(function(){
			var qtd40;
			var return40;

			this.qtd40 = data.filter40.length;
			this.return40 = '';

			for (i = 0; i < this.qtd40; i++){
				this.return40 += '<li class="slide" id=' + data.filter40[i].sku + '><div class="product-item">';
				this.return40 += '<span class="flag-discount ' + data.filter40[i].discount + '">' + data.filter40[i].discount + '</span>';
				this.return40 += '<img class="img-product" src=/sephora/' + data.filter40[i].image + ' />';
				this.return40 += '<div class="box-rating"><div class="rating" style="width:' + data.filter40[i].rating + '"></div></div>';
				this.return40 += '<div class=' + data.filter40[i].local + '>' + data.filter40[i].local + '</div>';
				this.return40 += '<div class="product">' + data.filter40[i].product + '</div>';
				this.return40 += '<div class="description">' + data.filter40[i].description + '</div>';
				this.return40 += '<div class="outprice ' + data.filter40[i].outprice + '">R$ ' + data.filter40[i].outprice + '</div>';
				this.return40 += '<div class="price">R$ ' + data.filter40[i].price + '</div>';
				this.return40 += '<div class="parcel">' + data.filter40[i].parcel + 'x R$ ' + data.filter40[i].valueparcel + '</div>';
				this.return40 += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.return40 += '<div class=' + data.filter40[i].frete + '>' + data.filter40[i].frete + '</div>';
			}
			$('#price-40').html('<ul class="gridslider">' + this.return40 + '</ul>');
			$('.gridslider').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		var qtdOferta;
		var returnOferta;

		this.qtdOferta = data.filter200.length;
		this.returnOferta = '';

		for (i = 0; i < this.qtdOferta; i++){
			this.returnOferta += '<li class="slide" id=' + data.filter200[i].sku + '><div class="product-item">';
			this.returnOferta += '<span class="flag-discount ' + data.filter200[i].discount + '">' + data.filter200[i].discount + '</span>';
			this.returnOferta += '<img class="img-product" src=/sephora/' + data.filter200[i].image + ' />';
			this.returnOferta += '<div class="box-rating"><div class="rating" style="width:' + data.filter200[i].rating + '"></div></div>';
			this.returnOferta += '<div class=' + data.filter200[i].local + '>' + data.filter200[i].local + '</div>';
			this.returnOferta += '<div class="product">' + data.filter200[i].product + '</div>';
			this.returnOferta += '<div class="description">' + data.filter200[i].description + '</div>';
			this.returnOferta += '<div class="outprice ' + data.filter200[i].outprice + '">R$ ' + data.filter200[i].outprice + '</div>';
			this.returnOferta += '<div class="price">R$ ' + data.filter200[i].price + '</div>';
			this.returnOferta += '<div class="parcel">' + data.filter200[i].parcel + 'x R$ ' + data.filter200[i].valueparcel + '</div>';
			this.returnOferta += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
			this.returnOferta += '<div class=' + data.filter200[i].frete + '>' + data.filter200[i].frete + '</div>';
		}
		$('#ofertas').html('<ul class="gridofertas">' + this.returnOferta + '</ul>');
		$('.gridofertas').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });

		$('#tabOferta').click(function(){
			var qtdOferta;
			var returnOferta;

			this.qtdOferta = data.filter200.length;
			this.returnOferta = '';

			for (i = 0; i < this.qtdOferta; i++){
				this.returnOferta += '<li class="slide" id=' + data.filter200[i].sku + '><div class="product-item">';
				this.returnOferta += '<span class="flag-discount ' + data.filter200[i].discount + '">' + data.filter200[i].discount + '</span>';
				this.returnOferta += '<img class="img-product" src=/sephora/' + data.filter200[i].image + ' />';
				this.returnOferta += '<div class="box-rating"><div class="rating" style="width:' + data.filter200[i].rating + '"></div></div>';
				this.returnOferta += '<div class=' + data.filter200[i].local + '>' + data.filter200[i].local + '</div>';
				this.returnOferta += '<div class="product">' + data.filter200[i].product + '</div>';
				this.returnOferta += '<div class="description">' + data.filter200[i].description + '</div>';
				this.returnOferta += '<div class="outprice ' + data.filter200[i].outprice + '">R$ ' + data.filter200[i].outprice + '</div>';
				this.returnOferta += '<div class="price">R$ ' + data.filter200[i].price + '</div>';
				this.returnOferta += '<div class="parcel">' + data.filter200[i].parcel + 'x R$ ' + data.filter200[i].valueparcel + '</div>';
				this.returnOferta += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.returnOferta += '<div class=' + data.filter200[i].frete + '>' + data.filter200[i].frete + '</div>';
			}
			$('#ofertas').html('<ul class="gridofertas">' + this.returnOferta + '</ul>');
			$('.gridofertas').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		$('#tabNovidades').click(function(){
			var qtdNovidades;
			var returnNovidades;

			this.qtdNovidades = data.filter120.length;
			this.returnNovidades = '';

			for (i = 0; i < this.qtdNovidades; i++){
				this.returnNovidades += '<li class="slide" id=' + data.filter120[i].sku + '><div class="product-item">';
				this.returnNovidades += '<span class="flag-discount ' + data.filter120[i].discount + '">' + data.filter120[i].discount + '</span>';
				this.returnNovidades += '<img class="img-product" src=/sephora/' + data.filter120[i].image + ' />';
				this.returnNovidades += '<div class="box-rating"><div class="rating" style="width:' + data.filter120[i].rating + '"></div></div>';
				this.returnNovidades += '<div class=' + data.filter120[i].local + '>' + data.filter120[i].local + '</div>';
				this.returnNovidades += '<div class="product">' + data.filter120[i].product + '</div>';
				this.returnNovidades += '<div class="description">' + data.filter120[i].description + '</div>';
				this.returnNovidades += '<div class="outprice ' + data.filter120[i].outprice + '">R$ ' + data.filter120[i].outprice + '</div>';
				this.returnNovidades += '<div class="price">R$ ' + data.filter120[i].price + '</div>';
				this.returnNovidades += '<div class="parcel">' + data.filter120[i].parcel + 'x R$ ' + data.filter120[i].valueparcel + '</div>';
				this.returnNovidades += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.returnNovidades += '<div class=' + data.filter120[i].frete + '>' + data.filter120[i].frete + '</div>';
			}
			$('#novidades').html('<ul class="gridnovidades">' + this.returnNovidades + '</ul>');
			$('.gridnovidades').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});

		$('#tabVendidos').click(function(){
			var qtdVendidos;
			var returnVendidos;

			this.qtdVendidos = data.filter80.length;
			this.returnVendidos = '';

			for (i = 0; i < this.qtdVendidos; i++){
				this.returnVendidos += '<li class="slide" id=' + data.filter80[i].sku + '><div class="product-item">';
				this.returnVendidos += '<span class="flag-discount ' + data.filter80[i].discount + '">' + data.filter80[i].discount + '</span>';
				this.returnVendidos += '<img class="img-product" src=/sephora/' + data.filter80[i].image + ' />';
				this.returnVendidos += '<div class="box-rating"><div class="rating" style="width:' + data.filter80[i].rating + '"></div></div>';
				this.returnVendidos += '<div class=' + data.filter80[i].local + '>' + data.filter80[i].local + '</div>';
				this.returnVendidos += '<div class="product">' + data.filter80[i].product + '</div>';
				this.returnVendidos += '<div class="description">' + data.filter80[i].description + '</div>';
				this.returnVendidos += '<div class="outprice ' + data.filter80[i].outprice + '">R$ ' + data.filter80[i].outprice + '</div>';
				this.returnVendidos += '<div class="price">R$ ' + data.filter80[i].price + '</div>';
				this.returnVendidos += '<div class="parcel">' + data.filter80[i].parcel + 'x R$ ' + data.filter80[i].valueparcel + '</div>';
				this.returnVendidos += '<div class="btn-addcart"><a href="#">COMPRAR</a></div>';
				this.returnVendidos += '<div class=' + data.filter80[i].frete + '>' + data.filter80[i].frete + '</div>';
			}
			$('#vendidos').html('<ul class="gridvendidos">' + this.returnVendidos + '</ul>');
			$('.gridvendidos').bxSlider({minSlides: 5, maxSlides: 5, slideWidth: 242, slideMargin: 0, pager:false });
		});
	});
});


