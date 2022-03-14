/**
 * Wrap everything in an IIFE
 */
(function() {

    /***************************************
   * Package data and constructor objects 
   ***************************************/

  // Package data array (simulated data source, such as JSON or database recordset)
    var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2456,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }
]; 
    
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    /*******************
     * Utility functions
     *******************/

    // Return today's date, formatted
        var getTodaysDate = function () {
            var today = new Date();
            return today.toDateString();
            };
    
    // Returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    };

    // Write the package object's data to the 
    // appropriate DOM elements utilizing the package selector property.
    var writePackageInfo = function (package) {
        // Get reference to the DOM element 
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        // Write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

// Write date
var dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

// Write package data one-by-one
var emmet = new Package(data[0]);
writePackageInfo(emmet);

var beautify = new Package(data[1]);
writePackageInfo(beautify);

}());
    
    
