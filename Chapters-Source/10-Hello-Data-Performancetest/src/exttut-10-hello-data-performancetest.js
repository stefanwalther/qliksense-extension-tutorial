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

				var perf = function ( testName, fn ) {
					var startTime = new Date().getTime();
					fn();
					var endTime = new Date().getTime();
					console.log( testName + ": " + (endTime - startTime) + "ms" );
				};

				function htmlInject () {

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
					$element.append( table );
				}

				function htmlInjectArray () {

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
					$element.append(table.join(''));
				}

				function domCreation () {

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
					$element.append( $table );

				}

				$element.empty();
				perf( 'htmlInject', htmlInject );

				$element.empty();
				perf( 'htmlInjectArray', htmlInjectArray );

				$element.empty();
				perf( 'domCreation', domCreation );

			}
		};

	} );
