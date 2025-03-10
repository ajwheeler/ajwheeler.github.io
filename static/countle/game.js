
class CountyData {
    constructor(seat, est, origin, etymology, population, area) {
        this.seat = seat;
        this.est = est;
        this.origin = origin;
        this.etymology = etymology;
        this.population = population;
        this.area = area;
    }
}

counties = {
    "Adams": new CountyData("West Union", "Jul 10, 1797", "Hamilton County", "John Adams (1735–1826), President of the United States when the county was organized", 27420, 583.91),
    "Allen": new CountyData("Lima", "Mar 1, 1820", "Shelby County", "John Allen (1771/2-1813), a War of 1812 colonel", 101115, 404.43),
    "Ashland": new CountyData("Ashland", "Feb 24, 1846", "Wayne, Richland, Huron, and Lorain Counties", "Ashland, home of U.S. Senator from Kentucky Henry Clay ", 52181, 424.37),
    "Ashtabula": new CountyData("Jefferson", "Jun 7, 1807", "Trumbull and Geauga Counties", "Ashtabula River, which means \"fish river\" in an Algonquian language", 97014, 702.44),
    "Athens": new CountyData("Athens", "Mar 1, 1805", "Washington County", "Athens in Greece", 58979, 506.76),
    "Auglaize": new CountyData("Wapakoneta", "Feb 14, 1848", "Allen, Mercer, Darke, Hardin, Logan, Shelby, and Van Wert Counties", "Auglaize River, which means \"fallen timbers river\" in the Shawnee Indian language", 45948, 401.25),
    "Belmont": new CountyData("St. Clairsville", "Sep 7, 1801", "Jefferson and Washington Counties", "French for \"beautiful mountain\"", 65509, 537.35),
    "Brown": new CountyData("Georgetown", "Mar 1, 1818", "Adams and Clermont Counties", "General Jacob Brown (1775–1828), an officer of the War of 1812", 43680, 491.76),
    "Butler": new CountyData("Hamilton", "May 1, 1803", "Hamilton County", "General Richard Butler (1743–1791), killed at the Battle of the Wabash", 388420, 467.27),
    "Carroll": new CountyData("Carrollton", "Jan 1, 1833", "Columbiana, Stark, Harrison, Jefferson, and Tuscarawas Counties", "Charles Carroll (1737–1832), last surviving signer of the United States Declaration of Independence", 26659, 394.67),
    "Champaign": new CountyData("Urbana", "Mar 1, 1805", "Greene and Franklin Counties", "French for \"a plain\", describing the land in the area", 38709, 428.56),
    "Clark": new CountyData("Springfield", "Mar 1, 1818", "Champaign, Madison, and Greene Counties", "General George Rogers Clark (1752–1818), defeated the Shawnee Indians in a battle near the Springfield area", 134831, 399.86),
    "Clermont": new CountyData("Batavia", "Dec 6, 1800", "Hamilton County", "French for \"clear mountain\"", 210805, 451.99),
    "Clinton": new CountyData("Wilmington", "Mar 1, 1810", "Highland and Warren Counties", "George Clinton (1739–1812), vice-president when the county was organized", 41964, 410.88),
    "Columbiana": new CountyData("Lisbon", "May 1, 1803", "Jefferson and Washington Counties", "Christopher Columbus, European explorer of the Americas", 100511, 532.46),
    "Coshocton": new CountyData("Coshocton", "Jan 31, 1810", "Muskingum and Tuscarawas Counties", "Delaware Indian word meaning \"union of waters\"", 36571, 564.07),
    "Crawford": new CountyData("Bucyrus", "Apr 1, 1820", "Delaware County", "Colonel William Crawford (1732–1782), Revolutionary War officer", 41522, 402.11),
    "Cuyahoga": new CountyData("Cleveland", "Jun 7, 1807", "Geauga County", "Cuyahoga River, which means \"crooked river\" in an Iroquoian language", 1236041, 458.49),
    "Darke": new CountyData("Greenville", "Jan 3, 1809", "Miami County", "General William Darke (1736–1801), Revolutionary War officer", 51529, 599.80),
    "Defiance": new CountyData("Defiance", "Apr 7, 1845", "Williams, Henry, and Paulding Counties", "Fort Defiance, built in 1794 by General Anthony Wayne", 38187, 411.16),
    "Delaware": new CountyData("Delaware", "Apr 1, 1808", "Franklin County", "Delaware Indians", 226296, 442.41),
    "Erie": new CountyData("Sandusky", "Mar 15, 1838", "Huron and Sandusky Counties", "Erie Indians", 74501, 254.88),
    "Fairfield": new CountyData("Lancaster", "Dec 9, 1800", "Ross and Washington Counties", "Named for the beauty of its \"fair fields\"", 162898, 505.11),
    "Fayette": new CountyData("Washington Court House", "Mar 1, 1810", "Ross and Highland Counties", "Gilbert du Motier, marquis de La Fayette, French military officer and aristocrat who participated in both the American and French revolutions", 28839, 406.58),
    "Franklin": new CountyData("Columbus", "Apr 30, 1803", "Ross and Wayne Counties", "Benjamin Franklin (1706–1791), Founding Father, author, printer, political theorist, scientist, inventor, and statesman ", 1321820, 539.87),
    "Fulton": new CountyData("Wauseon", "Apr 1, 1850", "Lucas, Henry, and Williams Counties", "Robert Fulton (1765–1815), inventor of the steamboat", 42171, 406.78),
    "Gallia": new CountyData("Gallipolis", "Apr 30, 1803", "Washington and Adams Counties", "Gaul, the ancient name of France", 29068, 468.78),
    "Geauga": new CountyData("Chardon", "Mar 1, 1806", "Trumbull County", "An Indian word meaning \"raccoon\"", 95469, 403.66),
    "Greene": new CountyData("Xenia", "May 1, 1803", "Hamilton and Ross Counties", "General Nathanael Greene (1742–1786), Revolutionary War officer", 168456, 414.88),
    "Guernsey": new CountyData("Cambridge", "Mar 1, 1810", "Belmont and Muskingum Counties", "Island of Guernsey, from where most of the settlers originated", 38098, 521.90),
    "Hamilton": new CountyData("Cincinnati", "Jan 2, 1790", "One of the original counties", "Alexander Hamilton (1755/7-1804), Secretary of the Treasury when the county was organized", 825037, 407.36),
    "Hancock": new CountyData("Findlay", "Apr 1, 1820", "Logan County", "John Hancock (1737–1793), president of the Continental Congress", 74861, 531.35),
    "Hardin": new CountyData("Kenton", "Apr 1, 1820", "Logan County", "General John Hardin (1753–1792), Revolutionary War officer", 30416, 470.29),
    "Harrison": new CountyData("Cadiz", "Feb 1, 1813", "Jefferson and Tuscarawas Counties", "General William Henry Harrison (1773–1841), an officer of the War of 1812 and future President of the United States", 14378, 403.53),
    "Henry": new CountyData("Napoleon", "Apr 1, 1820", "Shelby County", "Patrick Henry (1736–1799), Revolutionary War-era legislator, orator, and scholar", 27512, 416.50),
    "Highland": new CountyData("Hillsboro", "May 1, 1805", "Ross, Adams, and Clermont Counties", "Descriptive of the county's terrain", 43391, 553.28),
    "Hocking": new CountyData("Logan", "Mar 1, 1818", "Athens, Ross, and Fairfield Counties", "Possibly derived from a Delaware Indian word meaning \"bottle\"", 27858, 422.75),
    "Holmes": new CountyData("Millersburg", "Jan 20, 1824", "Coshocton, Wayne, and Tuscarawas Counties", "Major Andrew Holmes (died 1814), a War of 1812 officer", 44390, 422.99),
    "Huron": new CountyData("Norwalk", "Mar 7, 1809", "Portage and Cuyahoga Counties", "Huron Indians", 58218, 492.69),
    "Jackson": new CountyData("Jackson", "Mar 1, 1816", "Scioto, Gallia, Athens, and Ross Counties", "General Andrew Jackson (1767–1845), future President of the United States ", 32586, 420.28),
    "Jefferson": new CountyData("Steubenville", "Jul 29, 1797", "Washington County", "Thomas Jefferson (1743–1826), Vice President when the county was organized, future President of the United States, and principal author of the Declaration of Independence ", 64330, 409.61),
    "Knox": new CountyData("Mount Vernon", "Mar 1, 1808", "Fairfield County", "General Henry Knox, the first Secretary of War", 63183, 527.12),
    "Lake": new CountyData("Painesville", "Mar 6, 1840", "Geauga and Cuyahoga Counties", "Its location on Lake Erie", 231842, 228.21),
    "Lawrence": new CountyData("Ironton", "Dec 21, 1815", "Gallia and Scioto Counties", "Captain James Lawrence (1781–1813), naval hero in the War of 1812", 56653, 454.96),
    "Licking": new CountyData("Newark", "Mar 1, 1808", "Fairfield County", "Licking River, named for the salt licks in the area, or an English pronunciation of the Lenape word meaning \"where the flood waters recede\"", 181359, 686.50),
    "Logan": new CountyData("Bellefontaine", "Mar 1, 1818", "Champaign County", "General Benjamin Logan (circa 1742 – 1802), who destroyed Shawnee Indian towns in the county", 46040, 458.44),
    "Lorain": new CountyData("Elyria", "Dec 26, 1822", "Huron, Cuyahoga, and Medina Counties", "Province of Lorraine, France", 316268, 492.50),
    "Lucas": new CountyData("Toledo", "Jun 20, 1835", "Wood, Sandusky, and Huron Counties", "Robert Lucas (1781–1853), Governor of Ohio when the county was created", 426643, 340.46),
    "Madison": new CountyData("London", "Mar 1, 1810", "Franklin County", "James Madison (1751–1836), fourth President of the United States", 43540, 465.44),
    "Mahoning": new CountyData("Youngstown", "Mar 1, 1846", "Columbiana and Trumbull Counties", "Mahoning River, from a Lenape word meaning \"at the licks\"", 225636, 415.25),
    "Marion": new CountyData("Marion", "Apr 1, 1820", "Delaware County", "General Francis Marion (1732–1795), lieutenant colonel in the Continental Army and later brigadier general in the American Revolutionary War", 64642, 403.84),
    "Medina": new CountyData("Medina", "Feb 18, 1812", "Portage County", "Medina, world-renowned religious site in western Saudi Arabia", 183512, 423),
    "Meigs": new CountyData("Pomeroy", "Apr 1, 1819", "Gallia and Athens Counties", "Return Jonathan Meigs Jr. (1764–1825), Governor of Ohio and Postmaster General at the time the county was organized", 21969, 429.42),
    "Mercer": new CountyData("Celina", "Apr 1, 1820", "Darke County", "General Hugh Mercer (1726–1777), a Revolutionary War officer", 42348, 463.27),
    "Miami": new CountyData("Troy", "Mar 1, 1807", "Montgomery County", "Miami Indians", 110247, 407.04),
    "Monroe": new CountyData("Woodsfield", "Jan 29, 1813", "Belmont, Washington, and Guernsey Counties", "James Monroe (1758–1831), Secretary of State when the county was organized and future President of the United States", 13234, 455.54),
    "Montgomery": new CountyData("Dayton", "May 1, 1803", "Hamilton and Wayne Counties", "General Richard Montgomery (1738–1775), a Revolutionary War officer", 533892, 461.68),
    "Morgan": new CountyData("McConnelsville", "Dec 29, 1817", "Washington, Guernsey, and Muskingum Counties", "General Daniel Morgan (c. 1735 – 1802), a Revolutionary War officer", 13668, 417.66),
    "Morrow": new CountyData("Mount Gilead", "Mar 1, 1848", "Knox, Marion, Delaware, and Richland Counties", "Jeremiah Morrow (1771–1852), Governor of Ohio", 35339, 406.22),
    "Muskingum": new CountyData("Zanesville", "Mar 1, 1804", "Washington and Fairfield Counties", "An Indian word meaning \"A town by the river\" or \"by the river side", 86113, 664.63),
    "Noble": new CountyData("Caldwell", "Apr 1, 1851", "Monroe, Washington, Morgan, and Guernsey Counties", "James Noble, an early settler in the area", 14335, 399.00),
    "Ottawa": new CountyData("Port Clinton", "Mar 6, 1840", "Erie, Sandusky, and Lucas Counties", "Named for the Ottawa Indians; Ottawa means \"trader\" in their language", 39978, 254.95),
    "Paulding": new CountyData("Paulding", "Apr 1, 1820", "Darke County", "John Paulding  (1758–1818), captor of spy John André during the Revolutionary War", 18757, 416.26),
    "Perry": new CountyData("New Lexington", "Mar 1, 1818", "Washington, Fairfield, and Muskingum Counties", "Commodore Oliver Hazard Perry (1785–1819), a naval officer of the War of 1812", 35480, 409.78),
    "Pickaway": new CountyData("Circleville", "Mar 1, 1810", "Ross, Fairfield, and Franklin Counties", "A misspelling of the Piqua tribe, a branch of the Shawnee", 60023, 501.91),
    "Pike": new CountyData("Waverly", "Feb 1, 1815", "Ross, Scioto, and Adams Counties", "General Zebulon M. Pike (1779–1813), a War of 1812 officer and discoverer of Pikes Peak in Colorado in 1806", 27005, 441.49),
    "Portage": new CountyData("Ravenna", "Jun 7, 1807", "Trumbull County", "Derived from an Indian portage", 161745, 492.39),
    "Preble": new CountyData("Eaton", "Mar 1, 1808", "Montgomery and Butler Counties", "Captain Edward Preble (1761–1807), a Naval commander in the Revolutionary War", 40596, 424.80),
    "Putnam": new CountyData("Ottawa", "Apr 1, 1820", "Shelby County", "General Israel Putnam (1718–1790), a Revolutionary War officer", 34334, 483.87),
    "Richland": new CountyData("Mansfield", "Mar 1, 1808", "Fairfield County", "Descriptive of the soil in the area", 125319, 496.88),
    "Ross": new CountyData("Chillicothe", "Aug 20, 1798", "Adams and Washington Counties", "Named for U.S. Senator from Pennsylvania James Ross by territorial governor Arthur St. Clair ", 76606, 688.41),
    "Sandusky": new CountyData("Fremont", "Apr 1, 1820", "Huron County", "An Iroquois word meaning \"cold water\"", 58667, 409.18),
    "Scioto": new CountyData("Portsmouth", "May 1, 1803", "Adams County", "Scioto River; Scioto is a Wyandot Indian word meaning \"deer\"", 72194, 612.27),
    "Seneca": new CountyData("Tiffin", "Apr 1, 1820", "Huron County", "Seneca Indians, who had a reservation in the county area at the time", 54632, 550.59),
    "Shelby": new CountyData("Sidney", "Apr 1, 1819", "Miami County", "General Isaac Shelby (1750–1826), a Revolutionary War officer and Governor of Kentucky", 47671, 409.27),
    "Stark": new CountyData("Canton", "Feb 13, 1808", "Columbiana County", "General John Stark (1728–1822), a Revolutionary War officer; known as the \"Hero of Bennington\" for his exemplary service at the Battle of Bennington in 1777", 372657, 576.14),
    "Summit": new CountyData("Akron", "Mar 3, 1840", "Medina, Portage, and Stark Counties", "Its location at the highest elevation along the Ohio and Erie Canal", 535882, 419.38),
    "Trumbull": new CountyData("Warren", "Jul 10, 1800", "Jefferson and Wayne Counties", "Jonathan Trumbull (1710–1785), Governor of Connecticut when the county was organized", 200643, 616.48),
    "Tuscarawas": new CountyData("New Philadelphia", "Mar 15, 1808", "Muskingum County", "Tuscarawas River, meaning \"open mouth river\" or \"the Tuscarawas tribe who lived on the river\"", 91937, 567.58),
    "Union": new CountyData("Marysville", "Apr 1, 1820", "Delaware, Franklin, Logan, and Madison Counties", "Its formation by a union of four counties", 66898, 436.65),
    "Van": new CountyData("Van Wert", "Apr 1, 1820", "Darke County", "Isaac Van Wart (1760–1828), captor of spy John André during the Revolutionary War", 28769, 410.09),
    "Vinton": new CountyData("McArthur", "Mar 23, 1850", "Athens, Gallia, Hocking, Jackson, and Ross Counties", "Samuel Finley Vinton (1792–1862), Ohio Statesman and U.S. Congressman", 12565, 414.08),
    "Warren": new CountyData("Lebanon", "May 1, 1803", "Hamilton County", "General Joseph Warren (1741–1775), a Revolutionary War officer", 249778, 399.63),
    "Washington": new CountyData("Marietta", "Jul 27, 1788", "One of the original counties", "George Washington (1732–1799), commander of the Continental Army, president of the Constitutional Convention, and future President of the United States ", 58901, 635.15),
    "Wayne": new CountyData("Wooster", "Mar 1, 1812", "Stark County", "General Anthony Wayne (1745–1796), a Revolutionary War officer", 116559, 555.36),
    "Williams": new CountyData("Bryan", "Apr 1, 1820", "Darke County", "David Williams (1754–1831), captor of spy John André during the Revolutionary War", 36652, 421.74),
    "Wood": new CountyData("Bowling Green", "Apr 1, 1820", "Refactored from non-county territory", "Eleazer D. Wood (1783–1814), founder of Fort Meigs", 131592, 617.32),
    "Wyandot": new CountyData("Upper Sandusky", "Feb 3, 1845", "Marion, Crawford, and Hardin Counties", "Wyandot Indians", 21567, 405.61)
}

centroid_coords = {
    "Paulding": [264.2338502823101, 216.27422136834133],
    "Wood": [314.39418539311765, 232.3001318944496],
    "Mahoning": [462.93876026591073, 208.84677175754624],
    "Meigs": [398.475357745453, 74.7312943378924],
    "Summit": [423.3399821526124, 215.92924993497144],
    "Richland": [370.9144362792145, 191.40516646361215],
    "Vinton": [373.6112187472688, 86.2964926036159],
    "Pike": [342.34420099911466, 74.42511169053239],
    "Miami": [281.16339855269115, 142.51715534230112],
    "Tuscarawas": [426.92682067004284, 168.68598477455458],
    "Wayne": [404.9104635641015, 195.26338428465738],
    "Sandusky": [339.31860058617025, 231.76716232673164],
    "Morgan": [407.34147433247136, 111.89217449936596],
    "Putnam": [287.5220487819108, 209.27768695754014],
    "Noble": [428.42114911308374, 122.12355217366024],
    "Trumbull": [463.32125131362045, 229.7242844241244],
    "Stark": [432.30226841110306, 194.50457721161624],
    "Seneca": [340.0513893476322, 215.64231343475268],
    "Wyandot": [330.6577025049149, 196.2753189750357],
    "Van": [263.50702893074305, 198.2513882843447],
    "Medina": [404.158640010111, 215.19208648646975],
    "Monroe": [448.30187715086885, 119.74715290495385],
    "Shelby": [282.8012256915642, 161.6813805767215],
    "Scioto": [346.2233855966942, 55.53648098921987],
    "Mercer": [260.7237923380627, 176.55059964047695],
    "Washington": [426.5422681594584, 100.69646301454773],
    "Portage": [440.7726124964592, 219.03512951978354],
    "Williams": [264.52412722128236, 246.9077259376506],
    "Lawrence": [370.8381518293591, 41.27658365667887],
    "Guernsey": [426.1399143928184, 141.84336691856151],
    "Athens": [397.1844801861599, 92.06731394122987],
    "Gallia": [382.7004914537368, 56.8921574006039],
    "Hardin": [311.89099215459146, 183.9991197875312],
    "Jackson": [366.46010992250604, 70.3322501294318],
    "Defiance": [269.226610414767, 230.48823559503975],
    "Belmont": [453.00812297891844, 139.72215895892276],
    "Fulton": [288.32765149345533, 249.30028418126574],
    "Crawford": [350.8193658558809, 196.723137589157],
    "Jefferson": [464.5592572371254, 165.40251669992674],
    "Allen": [288.5640561160251, 191.95953816929116],
    "Preble": [258.4357195098686, 121.49018722999412],
    "Darke": [260.591970536432, 148.47545237923765],
    "Henry": [291.2096861539212, 230.74328721630718],
    "Geauga": [441.4152607277174, 241.9641747108235],
    "Adams": [320.3829677352258, 58.59259204951403],
    "Huron": [367.7191894532291, 217.0747287999515],
    "Columbiana": [463.2195026222651, 191.85229171429552],
    "Hancock": [311.82069283912625, 207.49681851570296],
    "Auglaize": [282.20287324985964, 177.53130155435292],
    "Holmes": [402.85845352789397, 176.78981863161474],
    "Carroll": [447.0223587683161, 178.53536692899004],
    "Harrison": [447.2549954908907, 158.8127499390912],
    "Ashland": [384.8421802289944, 196.35502824713188],
    "Lucas": [321.4746719516706, 254.1458029468461],
    "Ashtabula": [462.7565081379797, 269.4483132729047],
    "Cuyahoga": [414.5335341399413, 251.02788787862465],
    "Ottawa": [345.74965466352603, 248.67766263518706],
    "Lake": [437.5333373207329, 270.03745006816115],
    "Erie": [368.85127909082166, 239.5165556100995],
    "Lorain": [391.0813374319751, 238.7183633877813],
    "Highland": [313.70887988589857, 82.081937924815],
    "Fayette": [321.77169847016654, 107.8661022450275],
    "Ross": [342.9894284438219, 92.3628855592379],
    "Hocking": [373.9281819207533, 103.26808005190574],
    "Perry": [386.8852515310074, 119.84108249172073],
    "Muskingum": [402.3208789653146, 135.66807801260296],
    "Coshocton": [403.4608425911658, 158.87536471878192],
    "Knox": [376.95908902420854, 165.47706320255574],
    "Morrow": [357.3356064905451, 174.14476020966092],
    "Marion": [338.05319103058076, 178.61438666047724],
    "Logan": [306.03440608967094, 165.23587728066062],
    "Champaign": [305.59069150820545, 147.93631039382046],
    "Clark": [304.59862464853046, 132.70031417819044],
    "Pickaway": [344.85929873183335, 113.3346319617185],
    "Fairfield": [365.8681226780612, 120.82625027188531],
    "Licking": [373.7197223846419, 144.2850079268372],
    "Delaware": [346.1420507951208, 157.2493819535282],
    "Union": [326.77826477201825, 158.83445860320282],
    "Madison": [324.9709065937977, 130.89292412125306],
    "Franklin": [345.78784090612425, 135.92991220746563],
    "Brown": [299.162128773035, 64.97175844466976],
    "Hamilton": [263.18779850840707, 83.70719004743377],
    "Butler": [261.7988162265898, 100.50665820877674],
    "Montgomery": [277.4733320370365, 121.96006878091582],
    "Greene": [298.7506896574109, 117.25094249875191],
    "Clinton": [302.80695204741295, 98.11009100244618],
    "Clermont": [283.9688518401241, 73.04446155633897],
    "Warren": [283.655546160353, 99.29088076208564]
}

function autocomplete(inp, arr) {
    // inp in the text field
    // arr is the array of possible autocompleted values

    var currentFocus;

    // whenever someone writes in the text field
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAutocomplete(); // close any already open lists
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAutocomplete();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAutocomplete(inp, e.target);
    });
}

function closeAutocomplete(elmnt) {
    // close all autocomplete lists in the document except elmnt
    inp = document.getElementById("county_field")
    var items = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < items.length; i++) {
        if (elmnt != items[i] && elmnt != inp) {
            items[i].parentNode.removeChild(items[i]);
        }
    }
}

function dissable_input() {
    document.getElementById("guess-button").disabled = true
    document.getElementById("county_field").disabled = true
}

function normalizeName(c) {
    c = c.trim().toLowerCase()
    return c.charAt(0).toUpperCase() + c.slice(1);
}

function distance(xy1, xy2) {
    dx = xy1[0] - xy2[0]
    dy = xy1[1] - xy2[1]

    d = Math.sqrt(dx * dx + dy * dy)

    angle = Math.atan(dy / dx)
    //correct to cover the whole unit circle
    if (dx < 0) {
        angle += Math.PI
    }

    if (-Math.PI / 8 < angle && angle < Math.PI / 8) {
        dir = "➡️"
    } else if (Math.PI / 8 < angle && angle < 3 * Math.PI / 8) {
        console.log((Math.PI / 8 < angle && angle < 3 * Math.PI / 8))
        console.log(Math.PI / 8, " ", angle, " ", 3 * Math.PI / 8)
        console.log("?")
        dir = "↗️"
    } else if (3 * Math.PI / 8 < angle && angle < 5 * Math.PI / 8) {
        dir = "⬆️"
    } else if (5 * Math.PI / 8 < angle && angle < 7 * Math.PI / 8) {
        dir = "↖️"
    } else if (7 * Math.PI / 8 < angle && angle < 9 * Math.PI / 8) {
        dir = "️⬅️"
    } else if (9 * Math.PI / 8 < angle && angle < 11 * Math.PI / 8) {
        dir = "↙️"
    } else if (11 * Math.PI / 8 < angle || angle < -3 * Math.PI / 8) {
        dir = "⬇️"
    } else {
        dir = "↘️"
    }

    return [Math.round(d), dir]
}

which_guess = 1
past_guesses = []
function handle_guess() {
    closeAutocomplete()

    errbox = document.getElementById("errbox")
    errbox.innerHTML = ""

    county_field = document.getElementById("county_field")
    guess = normalizeName(county_field.value)
    console.log("Guess:", guess)
    county_field.value = ""

    if (guess == "") {
        return
    } if (!(guess in counties)) {
        errbox.innerHTML = "That's not a county!"
        return
    } else if (past_guesses.includes(guess)) {
        errbox.innerHTML = "You already guessed that!"
    } else {
        past_guesses.push(guess)
        guessRow = document.getElementsByClassName("guess-row")[which_guess - 1]
        guessRow.innerHTML = guess

        if (which_guess == n_guesses) {
            dissable_input()
        }

        statbox = document.getElementsByClassName("guess-status")[which_guess - 1]
        if (guess == the_answer) {
            guessRow.classList.add("correct")
            statbox.classList.add("correct")
            dissable_input()
            statbox.innerHTML = "🧐"
        } else {
            // display the distance and direction
            const [dist, dir] = distance(centroid_coords[the_answer], centroid_coords[guess])
            statbox.innerHTML = dist + " miles " + dir

            // if they got it wrong on the last guess, display the correct answer
            if (which_guess == n_guesses) {
                errbox.innerHTML = "It's " + the_answer + " County 🤷‍♀️"
            }
        }
        which_guess += 1
    }
}

function randomCounty(seed) {
    var x = Math.sin(seed++) * 10000;
    r = x - Math.floor(x);
    r = Math.floor(r * countyNames.length)
    return countyNames[r % countyNames.length]
}

n_guesses = 6

// add rows for each guess
guess_rows_html = ""
for (i = 0; i < n_guesses; i++) {
    guess_rows_html += "<div class=\"guess-row\"></div><div class=\"guess-status\"></div>"
}
document.getElementById("game").innerHTML += guess_rows_html


countyNames = Object.keys(counties)
autocomplete(document.getElementById("county_field"), countyNames);

// if the user hits enter or the guess button is pressed, submit the guess
document.getElementById("county_field").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        handle_guess();
    }
})
document.getElementById("guess-button").addEventListener("click", handle_guess)

document.getElementById("county_field").focus()

// get today's date as an integer
today = new Date()
// random county based on today's date
the_answer = randomCounty(today.getDate() + today.getMonth() * 31 + today.getFullYear() * 365)
console.log("The answer is", the_answer)

img = document.createElement("img")
img.src = "plots/" + the_answer + ".png"
document.getElementById("display").appendChild(img)