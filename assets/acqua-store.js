//Acqua products
    var acqua_tb_products		= {};

try{
  document.querySelectorAll('.swiper-container:not(.swiper-product-main)').forEach(function(el) {
    new Swiper(el, {
        autoHeight: true,
        slidesPerView: 1,
        loop: false,
        navigation: {
            nextEl: el.nextElementSibling.nextElementSibling,
            prevEl: el.nextElementSibling,
        },
    });
  });
  
  var swiper_product_main  = new Swiper('.swiper-product-main', {
    loop			: true,
    slidesPerView	: 1,
    navigation		: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
       	init: function () {
      		var currentVideo =  $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
        
    		currentVideo.trigger('play');
    	},
  	},
  });
  
  var sliderVideos = jQuery(".swiper-slide video");
  
  swiper_product_main.on('slideChange', function () {
	sliderVideos.each(function( index ) {
		this.currentTime = 0;
	});
    
  	var prevVideo 		=  jQuery("[data-swiper-slide-index=" + this.previousIndex + "]").find("video"),
		currentVideo 	=  jQuery("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
     
     prevVideo.trigger('stop');   
     currentVideo.trigger('play');
   });
}catch(error){
  console.log(error);
}

const 	single_option_selector = ".acqua-single-option-selector";
var 	current_product,
    	product_variants,
    	selected_values,
        variant,
    	current_options,
    	current_options_elms,
    	$box_product;

$(document).ready(function(){
  $('.box-product .image').each(function() {
      var $elm = $(this);
      $elm.magnificPopup({
              type: 'image',
        	  delegate: 'a',
              gallery: {
                enabled: true,
              },
              callbacks: {
                beforeOpen: function(e) {
                  var imageIndex = parseInt(
                    $elm.find(".featured-container").find('img').attr('data-position')
                  ) || 0;
                  imageIndex++;
                  this.goTo(imageIndex);
                },
              },
            });
	});
});

$(document).on("change", ".acqua-single-option-selector", function(e){
  	//Find the box
	$box_product = $(this).parents(".box-product");
  
  	//Get current product
  	current_product = JSON.parse(
      	$box_product.find("[id^='ProductJson-']").html()
    );
  
    //Get master dropdown
  	$master_variant_dropdown = $box_product.find("[id^='ProductSelect-']");
  
  	//Fixed carts
  	$cart_error = $box_product.find(".cart-error");
  	$product_prices = $box_product.find("[class^='.product-single__price']");
  	$add_to_cart	= $box_product.find("[id^='AddToCart']");
   	$add_to_cart_text	= $box_product.find("[id^='AddToCartText']");
  	$cart_buttons	= $box_product.find("[id^='CartButtons']");
  	$compare_price	= $box_product.find("[id^='ComparePrice']");
    $original_price	= $box_product.find("[id^='ProductPrice']");
  
  	if(current_product){
      //Get current options elements
      current_options_elms = $box_product.find(single_option_selector);

      if(current_options_elms){
          //Get Current options
          current_options = $.map(
              current_options_elms,
              function(element) {
                  var $element = $(element);
                  var type = $element.attr('type');
                  var currentOption = {};

                  if (type === 'radio' || type === 'checkbox') {
                      if ($element[0].checked) {
                          currentOption.value = $element.val();
                          currentOption.index = $element.data('index');
                          return currentOption;
                      } else {
                          return false;
                      }
                  } else {
                      currentOption.value = $element.val();
                      currentOption.index = $element.data('index');
                      return currentOption;
                  }
              }
          );

          selected_values 	= current_options;
		  product_variants	= current_product.variants;
        
		  //Recorrer cada una de las variantes
          var found = false;
        
		  product_variants.forEach(function(variant) {
          	var satisfied = true;
          	var options = variant.options;

          	selected_values.forEach(function(option) {
            	if (satisfied) {
              		satisfied = option.value === variant[option.index];
            	}
          	});

          	if (satisfied) {
            	found = variant;
          	}
          });
        
          //Se encuentro variante
          if(found)
            variant = found;
        
          // No hay variante
          if (!variant) {
          	return;
          }
        
          //Actualizar dropdown variantes maestras
          $master_variant_dropdown[0].value = variant.id;
        
          //Actualizar imagenes de variaciones
          /*if (!variant.featured_image)
            return;*/
        
        if (variant.featured_image){
            var $thumbnail = $(
            '.acqua_product-single__thumbnail' +
              '[data-image-id="' +
              variant.featured_image.id +
              '"]'
            );
            var $thumbnailImage = $thumbnail.find('img');
            var $productImage = $box_product.find("[id^='ProductImage-']");

            $productImage.attr({
              src: $thumbnailImage.data('default'),
              alt: $thumbnailImage.attr('alt'),
              srcset: '',
              'data-src': $thumbnailImage.data('src-pattern'),
              'data-aspectratio': $thumbnailImage.data('aspectratio'),
              'data-position': $thumbnailImage.data('position'),
              'data-max-width': $thumbnailImage.data('max-width'),
              'data-widths': '[' + $thumbnailImage.data('widths') + ']',
              'data-id': $productImage.data('id'),
              'data-sizes': $productImage.data('sizes'),
            });
        }



        
        // Update Price
     //  	$original_price.html(
     //       theme.Currency.formatMoney(variant.price, StyleHatch.currencyFormat)
     //     );

      
            // Apply any currency conversions
     //       if (StyleHatch.currencyConverter) {
              // clear out previous currency attributes
      //        removeDataAttributes($original_price);
      //        Currency.convertAll(
      //          StyleHatch.shopCurrency,
      //          $('[name=currencies]').val()
      //        );
      //        $('.selected-currency').text(Currency.currentCurrency);
      //      }

            // Update and show the product's compare price if necessary
       //     if (variant.compare_at_price > variant.price) {
       //       $compare_price
       //         .find('span.money')
        //        .html(
        //          theme.Currency.formatMoney(
         //           variant.compare_at_price,
          //          StyleHatch.currencyFormat
            //      )
           //     );
           //   $compare_price.show();
          //  } else {
          //    $compare_price.hide();
          //  }



/*
$original_price.html(
  variant.price.toLocaleString(undefined, { style: 'currency', currency: '' })
);


if (variant.compare_at_price > variant.price) {
  $compare_price
    .find('span.money')
    .html(
      variant.compare_at_price.toLocaleString(undefined, { style: 'currency', currency: '' })
    );
  $compare_price.show();
} else {
  $compare_price.hide();
}

*/




        
        
        
          //Update Add to cart buttons
           if (variant) {
            $cart_error.hide();
            $product_prices
              .removeClass('visibility-hidden')
              .attr('aria-hidden', 'true');

            if (variant.available) {
              $add_to_cart
                .removeClass('disabled')
                .prop('disabled', false);
              $add_to_cart_text.text("SELECT THIS OPTION");
              $cart_buttons.addClass('cart-buttons__enabled');
            } else {
              // The variant doesn't exist, disable submit button and change the text.
              // This may be an error or notice that a specific variant is not available.
              $add_to_cart
                .addClass('disabled')
                .prop('disabled', true);
              $add_to_cart_text.text('SOLD OUT');
              $cart_buttons.removeClass('cart-buttons__enabled');
            }
          } else {
            $add_to_cart
              .addClass('disabled')
              .prop('disabled', true);
            $add_to_cart_text.text('SOLD OUT');
            $product_prices
              .addClass('visibility-hidden')
              .attr('aria-hidden', 'false');
            $cart_buttons.removeClass('cart-buttons__enabled');
          }
          
      }
    }else{
      return false;
    }
});

$(document).on("click", ".acqua-add-to-cart", function(){
  	var $elm = $(this);
  	var $box_product = $elm.parents(".box-product");
  	var $tb_wrap  = $elm.parents(".tops-and-bottoms-wrap");
	var tb_handle = $elm.data('tbtype');
  	var selected_variant = $box_product.find("[id^='ProductSelect'] option:selected").val();
  	
  	$tb_wrap.find(".acqua-add-to-cart").removeClass("selected").find("span").text("SELECT THIS OPTION");
  
  	$elm.addClass("selected").find("span").text("SELECTED");
  
	if(selected_variant)
	  	acqua_tb_products[tb_handle] = selected_variant;
  	else
      	delete acqua_tb_products[tb_handle];
  
  	updateTbQuantity();
});

$(document).on("click", ".global-add-to-cart > button", function(){
  	var cart_request = {items: []},
        product_v_id;
  
  	Object.keys(acqua_tb_products).forEach(function(key) {
      	product_v_id	 		= acqua_tb_products[key];
      
      	cart_request.items.push({
        	form_type: "product",
      		utf8: "✓",
			quantity: 1,
          	id: product_v_id,
          	product_type: key,
          	properties: {}
        });
	});
  
  	cart_request.items.forEach((cart_item) => {
		let linked_pt = cart_item.product_type == 'top' ? 'bottom' : 'top';
		cart_item.properties['linked_product'] = acqua_tb_products[linked_pt];
	});
  
  	$.post('/cart/add.js', cart_request);
  
  	setTimeout(function(){ window.location.href = '/cart';}, 1000);
});

$(document).on("click", ".acqua-remove-from-cart", function(e){
	e.preventDefault();
	var $elm 				= $(this),
        items_to_remove 	= [],
        cart_request		= {updates: {}},
        ci					= $elm.data('ci'),
        linked_ci 			= $elm.data('linkedci');
  
  	items_to_remove.push(ci, linked_ci);
  
  	items_to_remove.forEach((cart_item) => {
      	cart_request.updates[cart_item] = 0;
    });
  
   	$.post('/cart/update.js', cart_request);
 
  	setTimeout(function(){ window.location.href = '/cart';}, 1000);
})

function updateTbQuantity(){
  	var acqua_tb_products_qty	= 0,
        $acqua_tb_quantity_el	= $(".acqua_tb_quantity"),
  		$global_add_to_cart		= $(".global-add-to-cart > button");
  
	Object.keys(acqua_tb_products).forEach(function(key) {
		if(key == 'top' || key == 'bottom')
			acqua_tb_products_qty++
	});
  
	$acqua_tb_quantity_el.text(acqua_tb_products_qty);
  
  	if(acqua_tb_products_qty == 2){
      	$global_add_to_cart
        	.removeClass('disabled')
                .prop('disabled', false);
    }else{
    	$global_add_to_cart
        	.addClass('disabled')
              .prop('disabled', true);
    }     
}

jQuery(document).on("click", ".thumbnails [class^='product-single__thumbnail--']", function(e){
  e.preventDefault();
  
  var isVideo 			= false,
      $el				= jQuery( this ),
      $video_container	= jQuery( "[id^='AcquaProductVideo-']" ),
  	  $image_container	= jQuery( "[id^='ProductPhoto-']" ),
      clonedEl;

  if( $el.hasClass("video-thumbnail") )
  	isVideo = true;
  
  if( isVideo ){
	clonedEl = $el.find("video").clone().attr("autoplay", true);
	$video_container.html(clonedEl);
    $video_container.show();
    $image_container.hide();
  }else{
    $video_container.html("");
    $video_container.hide();
    $image_container.show();
  }
});



