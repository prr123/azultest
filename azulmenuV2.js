  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
        header: {
            style: {
                minHeight: '60px',
                margin: '10px',
                border: '1px solid lightgreen',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
				flexWrap: 'nowrap',
            },
            id: 'header',
            className: 'pagSections',
        },
        section: {
            style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
            },
            id: 'docmain',
            className: 'pagSections',
        },
        footer: {
            style: {
                height: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
        },
    }

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

//    azul.init(pageObj);

    azul.addMeta(metaObj);

    azul.addLink(linkObj);


    let stylObj = {};
    azul.addStyles(stylObj);

//    azul.addScript('azulLib.js');
	let mainObj = {
		id: 'main',
		typ: 'div',
		style: {
			width: 'calc(100% - 300px)',
			border: '1px solid blue',
            minHeight: '300px',
		},
	}

	let main = azul.addElement(mainObj);

	let header = azul.addAzulHeader(main);

	let secObj = {
		typ: 'section',
		parent: main,
		id: 'doc',
        className: 'azulSection',
		style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
		},
	};

	const doc = azul.addElement(secObj);

	let footerObj = {
		parent: main,
		cols: {
			Company: {
				mission: 'mission.js',
				team: 'team.js',
				history: 'history.js',
			},
			legal: {
			 	cookies: 'cookies.js',
				terms: 'terms.js',
				privacy: 'privacy.js',
			},
			Contact: {
				map: 'google',
				geoPos: {
					long: '39.46558953048778',
					lat:  '-0.3696211238660346',
				},
				address: {
					street: 'calle de maestro Gozalbo',
					st_num: '12',
					apt: '10',
					city: 'Valencia',
					zip: '46005',
					country: 'Spain',
				},
			}, //contact
		}, //cols
	}; //footerObj
	let footer = azul.addAzulFooter(footerObj);

/*
    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };

    let hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'header title',
        typ: 'h3',
    }
    azul.addElement(hdObj);

    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
    azul.addElement(hdfooterObj);

    let elObj = {
        style: {
                minHeight: '100px',
                margin: '10px',
                border: '1px solid green',
        },
		id: 'ndiv',
        parent: azul.doc,
        typ: 'div',
    };
    let ndiv = azul.addElement(elObj);

	let svgObj = {
		typ: 'svg',
		style: {
			border: '1px solid purple',
		},
		id: 'svgEl1',
		width: '200',
		height: '200',
		viewport: '0 0 200 200',

	};

	const svgWid = new svgWidget;
	let svgEl = svgWid.createSvg(svgObj);

	ndiv.appendChild(svgEl);


	let menuObj = {
    	id: 'mainMenu',
		style: {
    		width: '300px',
    		minHeight: '500px',
    		margin: '10px',
    		border: '1px solid green',
    		position: 'absolute',
    		top: '20px',
   			left: '20px',
    		zIndex: '1',
    		backgroundColor: 'white',
    		display: 'block',
			parent: azul.doc,
		},
		items: ['blogA', 'blogB', 'blogC'],

	};
	const menuWid = new menuWidget;
	let menuDiv = menuWid.create(menuObj);

	azul.doc.appendChild(menuDiv);

	const login = new loginWidget;
	let loginDiv = login.create({});

	azul.header.appendChild(loginDiv);
*/
    document.body.appendChild(main);
}
