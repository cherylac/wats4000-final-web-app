<template>
   <div>
       <h2>How is the air today?</h2>
       <form v-on:submit.prevent="getCities">
           <p>Enter your city and state: <input type="text" v-model="query" placeholder="ex: Seattle, WA"> <button type="submit">See the AQ</button></p>
        </form>
        <ul class="cities" v-if="results && results.list.length > 0">
            <li v-for="(city, index) in results.list" v-bind:key="index">
                <h2>{{ city.name }}, {{ city.sys.country }}</h2>
                <p><router-link v-bind:to="{ name; 'CurrentAir', params: {cityId: city.id } }"</p>
        </li>
     </ul>
    </div>