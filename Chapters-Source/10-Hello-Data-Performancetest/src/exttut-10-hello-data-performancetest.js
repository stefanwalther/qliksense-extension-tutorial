define( [
		'jquery',
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( $, props, initProps, extensionUtils, cssContent ) {
		'use strict';
		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			paint: function ( $element, layout ) {

				var hc = layout.qHyperCube;

				var perfTest = function ( testName, fn ) {
					var startTime = new Date().getTime();
					fn();
					var endTime = new Date().getTime();
					console.log( testName + ": " + (endTime - startTime) + "ms" );
				};

				var $container;

				function ensureContainer() {
					$container = $(document.createElement('div') ).addClass('divContainer');
					$element.append($container);
				}

				function htmlInject () {

					ensureContainer();
					// Default rendering with HTML injection

					var table = '<table border="1">';

					table += '<thead>';
					table += '<tr>';
					for ( var i = 0; i < hc.qDimensionInfo.length; i++ ) {
						table += '<th>' + hc.qDimensionInfo[i].qFallbackTitle + '</th>';
					}
					for ( var i = 0; i < hc.qMeasureInfo.length; i++ ) {
						table += '<th>' + hc.qMeasureInfo[i].qFallbackTitle + '</th>';
					}
					table += '</tr>';
					table += '</thead>';

					table += '<tbody>';
					console.log('> rows > ', hc.qDataPages[0].qMatrix.length);
					for ( var r = 0; r < hc.qDataPages[0].qMatrix.length; r++ ) {
						table += '<tr>';
						for ( var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++ ) {
							table += '<td>';
							table += hc.qDataPages[0].qMatrix[r][c].qText;
							table += '</td>';
						}
						table += '</tr>';
					}
					table += '</tbody>';
					table += '</table>';
					$container.append( table );
				}

				function htmlInjectArray () {

					ensureContainer();
					// Default rendering with HTML injection

					var table = [];
					table.push('<table border="1">');

					table.push('<thead>');
					table.push('<tr>');
					for ( var i = 0; i < hc.qDimensionInfo.length; i++ ) {
						table.push('<th>' + hc.qDimensionInfo[i].qFallbackTitle + '</th>');
					}
					for ( var i = 0; i < hc.qMeasureInfo.length; i++ ) {
						table.push('<th>' + hc.qMeasureInfo[i].qFallbackTitle + '</th>');
					}
					table.push('</tr>');
					table.push('</thead>');

					console.log('> rows > ', hc.qDataPages[0].qMatrix.length);
					table.push('<tbody>');
					for ( var r = 0; r < hc.qDataPages[0].qMatrix.length; r++ ) {
						table.push('<tr>');
						for ( var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++ ) {
							table.push('<td>');
							table.push(hc.qDataPages[0].qMatrix[r][c].qText);
							table.push('</td>');
						}
						table.push('</tr>');
					}
					table.push('</tbody>');
					table.push('</table>');
					$container.append(table.join(''));
				}

				function domCreation () {

					ensureContainer();

					var $table = $( document.createElement( 'table' ) );

					var $thead = $( document.createElement( 'thead' ) );
					var $trThead = $( document.createElement( 'tr' ) );
					for ( var i = 0; i < hc.qDimensionInfo.length; i++ ) {
						var $th = $( document.createElement( 'th' ) ).html( hc.qDimensionInfo[i].qFallbackTitle );
						$trThead.append( $th );
					}
					for ( var i = 0; i < hc.qMeasureInfo.length; i++ ) {
						var $th = $( document.createElement( 'th' ) ).html(hc.qMeasureInfo[i].qFallbackTitle);
						$trThead.append( $th );
					}
					$thead.append( $trThead );
					$table.append( $thead );

					console.log('> rows > ', hc.qDataPages[0].qMatrix.length);
					var $tbody = $( document.createElement( 'tbody' ) );
					for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
						var $tr = $(document.createElement('tr'));
						for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
							var $td = $(document.createElement('td') ).html(hc.qDataPages[0].qMatrix[r][c].qText);
							$tr.append($td);
						}
						$tbody.append($tr);
					}


					$table.append($tbody);
					$container.append( $table );

				}

				// Immediately appending
				function domCreation2 () {

					ensureContainer();
					var $table = $( document.createElement( 'table' ) );
					$container.append( $table );

					var $thead = $( document.createElement( 'thead' ) );
					$table.append($thead);

					var $trThead = $( document.createElement( 'tr' ) );
					$thead.append($trThead);

					for ( var i = 0; i < hc.qDimensionInfo.length; i++ ) {
						var $th = $( document.createElement( 'th' ) ).html( hc.qDimensionInfo[i].qFallbackTitle );
						$trThead.append( $th );
					}
					for ( var i = 0; i < hc.qMeasureInfo.length; i++ ) {
						var $th = $( document.createElement( 'th' ) ).html(hc.qMeasureInfo[i].qFallbackTitle);
						$trThead.append( $th );
					}

					console.log('> rows > ', hc.qDataPages[0].qMatrix.length);
					var $tbody = $( document.createElement( 'tbody' ) );
					$table.append($tbody);
					for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
						var $tr = $(document.createElement('tr'));
						for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
							var $td = $(document.createElement('td') ).html(hc.qDataPages[0].qMatrix[r][c].qText);
							$tr.append($td);
						}
						$tbody.append($tr);
					}
				}

				console.clear();
				$element.empty();
				perfTest( 'htmlInject - string concatenation', htmlInject );

				$element.empty();
				perfTest( 'htmlInjectArray - string array', htmlInjectArray );

				$element.empty();
				perfTest( 'Using createElement & append at the end', domCreation );

				$element.empty();
				perfTest( 'Using createElement and append immediately', domCreation2 );

			}
		};

	} );
