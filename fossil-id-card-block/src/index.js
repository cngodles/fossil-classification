const { registerBlockType } = wp.blocks;
const { EditableText, ColorPalette, MediaUpload, BlockControls, AlignmentToolbar } = wp.editor;
const { RichText, InspectorControls, InnerBlocks, __experimentalLinkControl: LinkControl, URLInputButton, URLInput, URLPopover } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, SelectControl, ToggleControl } = wp.components;
const { withSelect, select } = wp.data;
const ALLOWED_BLOCKS = ['core/button'];

function cssClass(...c) {
  return c.join(" ")
}


registerBlockType('fossil-id/fossil-id-box', {
  title: 'Fossil ID Box',
  description: 'A box to display name, scientific classification and temporal range.',
  icon: 'analytics',
  category: 'common',
	supports: {
		align: ['left', 'right', 'center']
	},
	attributes: {
		name: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
		temporalRange: { 
			source: 'html',
      selector: 'p.temporal-range'
		}, 
		kingdom: { 
			source: 'html',
      selector: '[data-g="k"].fc-val p'
		}, 
		phylum: { 
			source: 'html',
      selector: '[data-g="p"].fc-val p'
		}, 
		className: { 
			source: 'html',
      selector: '[data-g="c"].fc-val p'
		}, 
		order: { 
			source: 'html',
      selector: '[data-g="o"].fc-val p'
		}, 
		family: { 
			source: 'html',
      selector: '[data-g="f"].fc-val p'
		}, 
		genus: { 
			source: 'html',
      selector: '[data-g="g"].fc-val p'
		}, 
		species: { 
			source: 'html',
      selector: '[data-g="s"].fc-val p'
		}, 
		holoType: { 
			source: 'html',
      selector: 'p.holotype'
		}
  },
  edit: ({ attributes, setAttributes, isSelected  }) => {
		const { name, temporalRange, kingdom, phylum, className, order, family, genus, species, holoType } = attributes;
	
		function onChangeName(x){
      setAttributes( {name:x} );
    }
		function onChangeTemporalRange(x){
      setAttributes( {temporalRange:x} );
    }
		function onChangeKingdom(x){
      setAttributes( {kingdom:x} );
    }
		function onChangePhylum(x){
      setAttributes( {phylum:x} );
    }
		function onChangeClass(x){
      setAttributes( {className:x} );
    }
		function onChangeOrder(x){
      setAttributes( {order:x} );
    }
		function onChangeFamily(x){
      setAttributes( {family:x} );
    }
		function onChangeGenus(x){
      setAttributes( {genus:x} );
    }
		function onChangeSpecies(x){
      setAttributes( {species:x} );
    }
		function onChangeHoloType(x){
      setAttributes( {holoType:x} );
    }

    return ([
			<InspectorControls style= { { marginBottom: '40px' } }>
				<PanelBody title={ 'Background Image Settings' }>
					<p><strong>Alignment?</strong></p>
				</PanelBody>
      </InspectorControls>,
			<div className="fossil-classification">
				<RichText 
					key="editable"
					tagName="h2"
					placeholder="Genus & Species"
					value={ name }
					onChange={ onChangeName }
					/>
				<RichText 
					key="editable"
					tagName="p"
					className="temporal-range"
					placeholder="Temporal Range (Ex: 300 - 100MYA)"
					value={ temporalRange }
					onChange={ onChangeTemporalRange }
					/>
				<h3>Scientific Classification</h3>
				<div class="fossil-classification--chart">
					<div data-g="k" class="fc-label"><p>Kingdom:</p></div>
					<div data-g="k" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Kingdom (eg. Animalia)"
							value={ kingdom }
							onChange={ onChangeKingdom }
							/>
					</div>
					<div data-g="p" class="fc-label"><p>Phylum:</p></div>
					<div data-g="p" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Phylum"
							value={ phylum }
							onChange={ onChangePhylum }
							/>
					</div>
					<div data-g="c" class="fc-label"><p>Class:</p></div>
					<div data-g="c" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Class"
							value={ className }
							onChange={ onChangeClass }
							/>
					</div>
					<div data-g="o" class="fc-label"><p>Order:</p></div>
					<div data-g="o" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Order"
							value={ order }
							onChange={ onChangeOrder }
							/>
					</div>
					<div data-g="f" class="fc-label"><p>Family:</p></div>
					<div data-g="f" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Family"
							value={ family }
							onChange={ onChangeFamily }
							/>
					</div>
					<div data-g="g" class="fc-label"><p>Genus:</p></div>
					<div data-g="g" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Genus"
							value={ genus }
							onChange={ onChangeGenus }
							/>
					</div>
					<div data-g="s" class="fc-label"><p>Species:</p></div>
					<div data-g="s" class="fc-val">
						<RichText 
							key="editable"
							tagName="p"
							placeholder="Species"
							value={ species }
							onChange={ onChangeSpecies }
							/>
					</div>
				</div>
				<RichText 
					key="editable"
					tagName="p"
					className="holotype"
					placeholder="Holotype (eg. Godlesky 2020)"
					value={ holoType }
					onChange={ onChangeHoloType }
					/>
			</div>			
      ]);
  },
  save:({ attributes }) => {
		const { name, temporalRange, kingdom, phylum, className, order, family, genus, species, holoType } = attributes;
    return (
			<div className="fossil-classification">
				<RichText.Content 
						tagName="h2" 
						value={ name } 
					/>
				<RichText.Content 
						tagName="p" 
						className="temporal-range"
						value={ temporalRange } 
					/>
				<h3>Scientific Classification</h3>
				<div className="fossil-classification--chart">
					<div data-g="k" class="fc-label"><p>Kingdom:</p></div>
					<div data-g="k" class="fc-val"><p>{kingdom}</p></div>
					<div data-g="p" class="fc-label"><p>Phylum:</p></div>
					<div data-g="p" class="fc-val"><p>{phylum}</p></div>
					<div data-g="c" class="fc-label"><p>Class:</p></div>
					<div data-g="c" class="fc-val"><p>{className}</p></div>
					<div data-g="o" class="fc-label"><p>Order:</p></div>
					<div data-g="o" class="fc-val"><p>{order}</p></div>
					<div data-g="f" class="fc-label"><p>Family:</p></div>
					<div data-g="f" class="fc-val"><p>{family}</p></div>
					<div data-g="g" class="fc-label"><p>Genus:</p></div>
					<div data-g="g" class="fc-val"><p>{genus}</p></div>
					<div data-g="s" class="fc-label"><p>Species:</p></div>
					<div data-g="s" class="fc-val"><p>{species}</p></div>
				</div>
				<p className="holotype">{holoType}</p>
			</div>
    );
  }
});
