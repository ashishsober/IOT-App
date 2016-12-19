(function() {
	// 'use strict';
	angular.module('frontResources')
	.controller('AirConditionerController', airConditionerController)

	function airConditionerController () {
		var vm = this;
		var cssStyle = {
			'low': {
				'-webkit-animation': 'spin 2s linear infinite',
				'-moz-animation': 'spin 2s infinite linear',
				'-o-animation': 'spin 2s infinite linear',
				'animation': 'spin 2s linear infinite'				
			},
			'mid': {
				'-webkit-animation': 'spin 1s linear infinite',
				'-moz-animation': 'spin 1s infinite linear',
				'-o-animation': 'spin 1s infinite linear',
				'animation': 'spin 1s linear infinite'				
			},
			'high': {
				'-webkit-animation': 'spin 0.5s linear infinite',
				'-moz-animation': 'spin 0.5s infinite linear',
				'-o-animation': 'spin 0.5s infinite linear',
				'animation': 'spin 0.5s linear infinite'			
			}
		}
		vm.title = "Air Conditioner";
		vm.temperatureValue = 20;
		vm.modifyTemperature = modifyTemperature;
		vm.modeButton = null;
		vm.fanSpeedButton = 'low';
		vm.fanStyle = cssStyle['low'];

		vm.modifyTemperature()

		function modifyTemperature (buttonValue, category) {
			switch(buttonValue) {
				case 'increase':
					if (vm.temperatureValue < 26) {
						vm.temperatureValue += 1
					}
				break;
				case 'decrease':
					if (vm.temperatureValue > 16) {
						vm.temperatureValue -= 1
					}
				break;
				case 'cool':
					vm.temperatureValue = 18;
					vm.modeButton = buttonValue;
				break;
				case 'dry':
					vm.temperatureValue = 22;
					vm.modeButton = buttonValue;
				break;
				case 'heat':
					vm.temperatureValue = 25;
					vm.modeButton = buttonValue;
				break;
				default:
				break;
			}
			if (category === 'fan') {
				vm.fanSpeedButton = buttonValue;
				vm.fanStyle = cssStyle[buttonValue];
			}
			vm.temperatureStyle = getColor(vm.temperatureValue)
		}

		function getColor (temperatureValue) {
			if (temperatureValue > 23) {
				vm.modeButton = 'heat'
				return {
					'color': '#FF5722'
				}
			} else if (temperatureValue <= 23 && temperatureValue >= 21) {
				vm.modeButton = 'dry'
				return {
					'color': '#ffc107'
				}
			} else if (temperatureValue < 21) {
				vm.modeButton = 'cool'
				return {
					'color': '#03A9F4'
				}
			}
		}
	}
})();