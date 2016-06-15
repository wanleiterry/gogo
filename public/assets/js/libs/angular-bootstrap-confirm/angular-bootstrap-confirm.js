'use strict';
angular
  .module('mwl.confirm', [
    'ngSanitize',
    'ui.bootstrap.position'
  ])

  .controller('PopoverConfirmCtrl', ['$scope', '$element', '$compile', '$document', '$window', '$timeout', '$position', 'confirmationPopoverDefaults', function($scope, $element, $compile, $document, $window, $timeout, $position, confirmationPopoverDefaults) {
    var vm = this;
    vm.defaults = confirmationPopoverDefaults;
    vm.popoverPlacement = vm.placement || vm.defaults.placement;

    var template = [
      '<div class="popover" ng-class="vm.popoverPlacement">',
        '<div class="arrow"></div>',
        '<div class="popover-content">',
        '<span ng-bind-html="vm.message"></span>',
        '<button class="btn btn-sm" ng-class="\'btn-\' + (vm.confirmButtonType || vm.defaults.confirmButtonType)" ' +
        'ng-click="vm.onConfirm(); vm.hidePopover()" ng-bind-html="vm.confirmText || vm.defaults.confirmText"></button>',
        '<button class="btn btn-sm" ng-class="\'btn-\' + (vm.cancelButtonType || vm.defaults.cancelButtonType)" ' +
        'ng-click="vm.onCancel(); vm.hidePopover()" ng-bind-html="vm.cancelText || vm.defaults.cancelText"></button>',
        '</div>',
      '</div>'
    ].join('\n');

    var popover = angular.element(template);
    popover.css('display', 'none');
    $compile(popover)($scope);
    $document.find('body').append(popover);

    vm.isVisible = false;

    function positionPopover() {
      var position = $position.positionElements($element, popover, vm.popoverPlacement, true);
      position.top += 'px';
      position.left += 'px';
      popover.css(position);
    }

    function showPopover() {
      if (!vm.isVisible) {
        popover.css({display: 'block'});
        positionPopover();
        vm.isVisible = true;
      }
      vm.isOpen = true;
    }

    function hidePopover() {
      if (vm.isVisible) {
        popover.css({display: 'none'});
        vm.isVisible = false;
      }
      vm.isOpen = false;
    }

    function togglePopover() {
      if (!vm.isVisible) {
        showPopover();
      } else {
        hidePopover();
      }
      $scope.$apply();
    }

    function documentClick(event) {
      if (vm.isVisible && !popover[0].contains(event.target) && !$element[0].contains(event.target)) {
        hidePopover();
        $scope.$apply();
      }
    }

    vm.showPopover = showPopover;
    vm.hidePopover = hidePopover;
    vm.togglePopover = togglePopover;

    $scope.$watch('vm.isOpen', function(isOpen) {
      $timeout(function() { //timeout required so that documentClick() event doesn't fire and close it
        if (isOpen) {
          showPopover();
        } else {
          hidePopover();
        }
      });
    });

    $element.bind('click', togglePopover);

    $window.addEventListener('resize', positionPopover);

    $document.bind('click', documentClick);
    $document.bind('touchend', documentClick);

    $scope.$on('$destroy', function() {
      popover.remove();
      $element.unbind('click', togglePopover);
      $window.removeEventListener('resize', positionPopover);
      $document.unbind('click', documentClick);
      $document.unbind('touchend', documentClick);
    });

  }])

  .directive('mwlConfirm', function() {

    return {
      restrict: 'EA',
      controller: 'PopoverConfirmCtrl as vm',
      bindToController: true,
      scope: {
        confirmText: '@',
        cancelText: '@',
        message: '@',
        placement: '@',
        onConfirm: '&',
        onCancel: '&',
        confirmButtonType: '@',
        cancelButtonType: '@',
        isOpen: '='
      }
    };
  })

  .value('confirmationPopoverDefaults', {
    confirmText: '确认',
    cancelText: '取消',
    confirmButtonType: 'primary',
    cancelButtonType: 'default',
    placement: 'top'
  });

