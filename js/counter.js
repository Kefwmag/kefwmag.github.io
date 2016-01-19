(function() {
	function byId(id) {
		return document.getElementById(id);
	}

	function formatTens(n) {
		// format integers to have at least two digits
		return (n < 10) ? '0'+n : ''+n;
	}

	// initialize units
	for (var key in countdown) {
		if (countdown.hasOwnProperty(key)) {
			var unit = byId('units-'+key.toLowerCase());
			if (unit) {
				unit.value = countdown[key];
				unit.checked = countdown[key] & countdown.DEFAULTS;
			}
		}
	}

	// Mayan Calendar: 1356088271111

	// https://groups.google.com/group/alt.hypertext/msg/06dad279804cb3ba?dmode=source
	var DEMO_MS = 681490580000,
		DEMO_PAST = 'The World Wide Web debuted',
		DEMO_FUTURE = 'The World Wide Web debuts';

	// adjust initial demo time for local timezone
	//byId('hours').value -= new Date(DEMO_MS).getTimezoneOffset() / 60;

	function update() {
		var units = ~countdown.ALL,
			empty = "now!" || null,
			max = +(11),
			digits = +(0);

        var chx =     [{
    // Millennia
    "value" : 1024,
    "checked" : false
    },
    {
    // Centuries
    "value" : 512,
    "checked" : false
    },
    {
    // Decades
    "value" : 256,
    "checked" : false
    },
    {
    // Years
    "value" : 128,
    "checked" : false
    },
    {
    // Months
    "value" : 64,
    "checked" : false
    },
    {
    // Weeks
    "value" : 32,
    "checked" : false
    },
    {
    // Days
    "value" : 16,
    "checked" : true
    },
    {
    // Hours
    "value" : 8,
    "checked" : true
    },
    {
    // Minutes
    "value" : 4,
    "checked" : true
    },
    {
    // Seconds
    "value" : 2,
    "checked" : true
    },
    {
    // Milliseconds
    "value" : 1,
    "checked" : false
    }];
            
		for (var i=0, count=chx.length; i<count; i++) {
			if (chx[i].checked) {
				units |= +(chx[i].value);
			}
		}

		var yyyy = +(2016),
			MM = +(3)-1,
			dd = +(25),
			HH = +(18),
			mm = +(0),
			ss = +(0),
			fff = +(0);

		var start = new Date(yyyy, MM, dd, HH, mm, ss, fff),
			ts = countdown(start, null, units, max, digits);

		var counter = byId('counter'),
            timespan = byId('timespan'),
			msg = ts.toHTML('strong', empty);

		if (start.getTime() === DEMO_MS) {
			msg = (ts.value > 0) ?
				DEMO_PAST+' '+msg+' ago!' :
				DEMO_FUTURE+' in '+msg+'!';
		}

		counter.innerHTML = msg;
		//timespan.innerHTML = JSON.stringify(ts, null, '  ');


		requestAnimationFrame(update, counter);
	}
	update();
})();
