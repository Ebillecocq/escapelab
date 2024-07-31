
// tableau de marée en UNIX Timestamp
    let data = [
            {1721436840.0, 2.74},
            {1721458500.0, 9.1},
            {1721481480.0, 2.71},
            {1721503200.0, 9.62},
            {1721526240.0, 2.21},
            {1721548020.0, 9.56},
            {1721570820.0, 2.25},
            {1721592480.0, 10.08},
            {1721615640.0, 1.76},
            {1721637300.0, 9.96},
            {1721660100.0, 1.87},
            {1721681640.0, 10.45},
            {1721704920.0, 1.41},
            {1721726520.0, 10.25},
            {1721749320.0, 1.6},
            {1721770800.0, 10.69},
            {1721794140.0, 1.21},
            {1721815620.0, 10.4},
            {1721838480.0, 1.48},
            {1721859840.0, 10.76},
            {1721883300.0, 1.2},
            {1721904600.0, 10.36},
            {1721927520.0, 1.58},
            {1721948880.0, 10.6},
            {1721972340.0, 1.43},
            {1721993520.0, 10.1},
            {1722016560.0, 1.91},
            {1722037860.0, 10.22},
            {1722061380.0, 1.87},
            {1722082440.0, 9.67},
            {1722105600.0, 2.4},
            {1722126960.0, 9.66},
            {1722150540.0, 2.45},
            {1722171600.0, 9.15},
            {1722195000.0, 2.97},
            {1722216420.0, 9.03},
            {1722240060.0, 3.04},
            {1722261300.0, 8.65},
            {1722285120.0, 3.46},
            {1722306720.0, 8.48},
            {1722330360.0, 3.51},
            {1722352080.0, 8.34},
            {1722376140.0, 3.69},
            {1722398100.0, 8.22},
            {1722421380.0, 3.67},
            {1722443580.0, 8.39},
            {1722467400.0, 3.52},
            {1722489480.0, 8.38},
            {1722512400.0, 3.47},
            {1722534420.0, 8.78},
            {1722557880.0, 3.09},
            {1722579960.0, 8.78},
            {1722602580.0, 3.07},
            {1722624360.0, 9.25},
            {1722647640.0, 2.63},
            {1722669600.0, 9.21},
            {1722692040.0, 2.66},
            {1722713640.0, 9.66},
            {1722736800.0, 2.26},
            {1722758700.0, 9.54},
            {1722781080.0, 2.32},
            {1722802500.0, 9.95},
            {1722825660.0, 2.01},
            {1722847380.0, 9.75},
            {1722869820.0, 2.09},
            {1722891120.0, 10.11},
            {1722914280.0, 1.86},
            {1722935880.0, 9.86},
            {1722958320.0, 1.98},
            {1722979500.0, 10.17},
            {1723002720.0, 1.83},
            {1723024140.0, 9.87},
            {1723046640.0, 1.99},
            {1723067760.0, 10.1},
            {1723090920.0, 1.91},
            {1723112340.0, 9.76},
            {1723134780.0, 2.13},
            {1723155960.0, 9.9},
            {1723179000.0, 2.12},
            {1723200420.0, 9.54},
            {1723222860.0, 2.41},
            {1723243980.0, 9.58},
            {1723267020.0, 2.44},
            {1723288380.0, 9.21},
            {1723310940.0, 2.8},
            {1723331940.0, 9.17},
            {1723355040.0, 2.86},
            {1723376280.0, 8.82},
            {1723399080.0, 3.26},
            {1723420020.0, 8.7},
            {1723443180.0, 3.34},
            {1723464480.0, 8.39},
            {1723487580.0, 3.76},
            {1723508580.0, 8.19},
            {1723531920.0, 3.85},
            {1723553340.0, 7.94},
            {1723577040.0, 4.22},
            {1723598160.0, 7.7},
            {1723621740.0, 4.31},
            {1723643760.0, 7.56},
            {1723668300.0, 4.47},
            {1723689900.0, 7.42},
            {1723713600.0, 4.49},
            {1723736820.0, 7.59},
            {1723760460.0, 4.24},
            {1723782600.0, 7.69},
            {1723805760.0, 4.15},
            {1723828320.0, 8.16},
            {1723851540.0, 3.58},
            {1723873440.0, 8.33},
            {1723896480.0, 3.46},
            {1723918440.0, 8.94},
            {1723941540.0, 2.78},
            {1723963380.0, 9.07},
            {1723986300.0, 2.68},
            {1724008020.0, 9.71},
            {1724031120.0, 2.01},
            {1724052900.0, 9.77},
            {1724075760.0, 1.97},
            {1724097420.0, 10.39},
            {1724120520.0, 1.36},
            {1724142240.0, 10.35},
            {1724165040.0, 1.39},
            {1724186580.0, 10.93},
            {1724209740.0, 0.89},
            {1724231400.0, 10.76},
            {1724254140.0, 1.02},
            {1724275680.0, 11.25},
            {1724298840.0, 0.66},
            {1724320320.0, 10.94},
            {1724343120.0, 0.91},
            {1724364540.0, 11.3},
            {1724387820.0, 0.73},
            {1724409060.0, 10.85},
            {1724432040.0, 1.11},
            {1724453340.0, 11.04},
            {1724476620.0, 1.11},
            {1724497740.0, 10.49},
            {1724520780.0, 1.6},
            {1724542080.0, 10.46},
            {1724565360.0, 1.78},
            {1724586360.0, 9.91},
            {1724609580.0, 2.32},
            {1724630820.0, 9.67},
            {1724654160.0, 2.62},
            {1724675100.0, 9.2},
            {1724698620.0, 3.13},
            {1724719920.0, 8.79},
            {1724743440.0, 3.48},
            {1724764500.0, 8.47},
            {1724788620.0, 3.86},
            {1724810340.0, 8},
            {1724833920.0, 4.16},
            {1724855820.0, 7.93},
            {1724880420.0, 4.23},
            {1724903100.0, 7.69},
            {1724926140.0, 4.34},
            {1724948640.0, 8.01},
            {1724972760.0, 3.96},
            {1724995080.0, 8.07},
            {1725017760.0, 3.9},
            {1725039720.0, 8.57},
            {1725063300.0, 3.33},
            {1725085260.0, 8.7},
            {1725107760.0, 3.24},
            {1725129420.0, 9.22}
    ];


    function interpolate(double[][] data, double x) {
        int n = data.length;

        // Vérifier si x est à l'intérieur de la plage des données
        if (x < data[0][0] || x > data[n - 1][0]) {
            throw new IllegalArgumentException("x est en dehors de la plage des données. Utilisez l'extrapolation.");
        }

        // Trouver les deux points entre lesquels x se situe
        for (int i = 0; i < n - 1; i++) {
            if (x >= data[i][0] && x <= data[i + 1][0]) {
                return interpolateValue(data[i], data[i + 1], x);
            }
        }

        throw new IllegalArgumentException("Les points d'interpolation n'ont pas été trouvés.");
    }

   function interpolateValue(double[] point1, double[] point2, double x) {
        double x1 = point1[0];
        double y1 = point1[1];
        double x2 = point2[0];
        double y2 = point2[1];
        // Pour l'instant une interpolation linéaire. 
        return y1 + (x - x1) * (y2 - y1) / (x2 - x1);
    }
  
    function interpolateSin(double[] point1, double[] point2, double x) {
        double x1 = point1[0];
        double y1 = point1[1];
        double x2 = point2[0];
        double y2 = point2[1];
        // interpolation sinus ici.
         
        return y1 + Math.sin((x - x1)/ (x2 - x1)*Math.PI/2)* (y2 - y1) ;
    }
}
