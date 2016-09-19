(function (scope) {
var beer_list = [
  {
    name: 'fake 1',
    desc: 'blah blah',
    tasted: false,
    liked: false,
    hated: false,
    notes: null,
  },
  {
    name: 'fake 2',
    tasted: false,
    liked: true,
    hated: false,
    notes: null,
  },
];

var app = angular.module('beerfestlist', []);

app.controller('RootCtrl', function () {
});

app.controller('BeerCtrl', function ($scope) {
  this.beer =$scope.beer;

  this.get_like_class = function () {
    if (!this.beer.tasted) {
      return 'btn-default disabled';
    } else {
      var css_class = 'btn-';
      if (this.beer.liked) {
        css_class += 'success';
      } else {
        css_class += 'default';
      }
      return css_class;
    }
  };
  this.get_hate_class = function () {
    if (!this.beer.tasted) {
      return 'btn-default disabled';
    } else {
      var css_class = 'btn-';
      if (this.beer.hated) {
        css_class += 'danger';
      } else {
        css_class += 'default';
      }
      return css_class;
    }
  };

  this.toggle_tasted = function () {
    this.beer.tasted = !this.beer.tasted;
  };

  this.toggle_like = function () {
    if (!this.beer.tasted) {
      return;
    }
    if (this.beer.liked) {
      this.beer.liked = false;
    } else {
      this.beer.liked = true;
      this.beer.hated = false;
    }
  };

  this.toggle_hate = function () {
    if (!this.beer.tasted) {
      return;
    }
    if (this.beer.hated) {
      this.beer.hated = false;
    } else {
      this.beer.hated = true;
      this.beer.liked = false;
    }
  };
});

app.component('beerList', {
  templateUrl: 'templates/beer_list.html',
  controller: function () {
    this.beer_list = beer_list;
  },
});
})(this);
