import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",

    data: {
      countriesUrl: null,
      countries: [],
      countriesName: []
    },
    mounted(){
      this.fetchCountries();
      },
    methods: {
      fetchCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all/")
        .then((response) => response.json())
        .then(data => this.countries = data)
      },
      totalPopulation: function(){
        return this.countries.reduce((total, country) => {
          return total + country.population
          console.log(country.population);
        }, 0 )
      }}
      }

    )});
