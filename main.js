/**
 * Mobile-First E-Commerce Theme - Main JavaScript
 *
 * @package mf-ecommerce
 */

( function() {
	'use strict';

	/**
	 * Mobile Menu Toggle
	 */
	function initMobileMenu() {
		const menuToggle = document.querySelector( '.header__menu-toggle' );
		const navigation = document.querySelector( '.main-navigation' );

		if ( !menuToggle || !navigation ) {
			return;
		}

		// Toggle menu on button click
		menuToggle.addEventListener( 'click', function() {
			navigation.classList.toggle( 'is-active' );
			menuToggle.setAttribute( 'aria-expanded', navigation.classList.contains( 'is-active' ) );
		} );

		// Close menu when clicking on links
		const navLinks = navigation.querySelectorAll( 'a' );
		navLinks.forEach( function( link ) {
			link.addEventListener( 'click', function() {
				navigation.classList.remove( 'is-active' );
				menuToggle.setAttribute( 'aria-expanded', 'false' );
			} );
		} );

		// Close menu when clicking outside
		document.addEventListener( 'click', function( event ) {
			if ( !navigation.contains( event.target ) && !menuToggle.contains( event.target ) ) {
				navigation.classList.remove( 'is-active' );
				menuToggle.setAttribute( 'aria-expanded', 'false' );
			}
		} );

		// Close menu on Escape key
		document.addEventListener( 'keydown', function( event ) {
			if ( event.key === 'Escape' && navigation.classList.contains( 'is-active' ) ) {
				navigation.classList.remove( 'is-active' );
				menuToggle.setAttribute( 'aria-expanded', 'false' );
				menuToggle.focus();
			}
		} );
	}

	/**
	 * Lazy Load Images
	 */
	function initLazyLoading() {
		const images = document.querySelectorAll( 'img[loading="lazy"]' );

		if ( 'IntersectionObserver' in window ) {
			const imageObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const img = entry.target;
						img.src = img.src;
						img.classList.add( 'loaded' );
						observer.unobserve( img );
					}
				} );
			} );

			images.forEach( function( img ) {
				imageObserver.observe( img );
			} );
		}
	}

	/**
	 * Add Animation Classes on Scroll
	 */
	function initScrollAnimations() {
		const elements = document.querySelectorAll( 
			'.product-card, .brands__item, .hero__content' 
		);

		if ( 'IntersectionObserver' in window ) {
			const observerOptions = {
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px'
			};

			const elementObserver = new IntersectionObserver( function( entries ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
					}
				} );
			}, observerOptions );

			elements.forEach( function( element ) {
				element.style.opacity = '0';
				element.style.transform = 'translateY(20px)';
				element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
				elementObserver.observe( element );
			} );
		}
	}

	/**
	 * Handle Hero Button Link
	 */
	function initHeroButton() {
		const heroButton = document.querySelector( '.hero__button' );
		if ( heroButton ) {
			heroButton.addEventListener( 'click', function( e ) {
				// Allow default link behavior
				e.preventDefault();
				const href = this.getAttribute( 'href' );
				if ( href ) {
					window.location.href = href;
				}
			} );
		}
	}

	/**
	 * Prevent FOUC (Flash of Unstyled Content)
	 */
	function preventFOUC() {
		document.documentElement.style.display = 'block';
	}

	/**
	 * Initialize all scripts on DOM ready
	 */
	function init() {
		preventFOUC();
		initMobileMenu();
		initLazyLoading();
		initScrollAnimations();
		initHeroButton();

		// Log theme initialization
		if ( window.console && window.console.log ) {
			console.log( 'Mobile-First E-Commerce Theme Initialized' );
		}
	}

	// Run on DOM ready
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}

} )();
