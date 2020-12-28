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
      selector: '[data-g="k"] p.fc-val'
		}, 
		phylum: { 
			source: 'html',
      selector: '[data-g="p"] p.fc-val'
		}, 
		className: { 
			source: 'html',
      selector: '[data-g="c"] p.fc-val'
		}, 
		order: { 
			source: 'html',
      selector: '[data-g="o"] p.fc-val'
		}, 
		family: { 
			source: 'html',
      selector: '[data-g="f"] p.fc-val'
		}, 
		genus: { 
			source: 'html',
      selector: '[data-g="g"] p.fc-val'
		}, 
		species: { 
			source: 'html',
      selector: '[data-g="s"] p.fc-val'
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
					<div data-g="k">
						<p className="fc-label">Kingdom:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Kingdom (eg. Animalia)"
							value={ kingdom }
							onChange={ onChangeKingdom }
							/>
					</div>
					<div data-g="p">
						<p className="fc-label">Phylum:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Phylum"
							value={ phylum }
							onChange={ onChangePhylum }
							/>
					</div>
					<div data-g="c">
						<p className="fc-label">Class:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Class"
							value={ className }
							onChange={ onChangeClass }
							/>
					</div>
					<div data-g="o">
						<p className="fc-label">Order:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Order"
							value={ order }
							onChange={ onChangeOrder }
							/>
					</div>
					<div data-g="f">
						<p className="fc-label">Family:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Family"
							value={ family }
							onChange={ onChangeFamily }
							/>
					</div>
					<div data-g="g">
						<p className="fc-label">Genus:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
							placeholder="Genus"
							value={ genus }
							onChange={ onChangeGenus }
							/>
					</div>
					<div data-g="s">
						<p className="fc-label">Species:</p>
						<RichText 
							key="editable"
							tagName="p"
			 				className="fc-val"
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
					<div data-g="k">
						<p className="fc-label">Kingdom:</p>
						<p className="fc-val">{kingdom}</p>
					</div>
					<div data-g="p">
						<p className="fc-label">Phylum:</p>
						<p className="fc-val">{phylum}</p>
					</div>
					<div data-g="c">
						<p className="fc-label">Class:</p>
						<p className="fc-val">{className}</p>
					</div>
					<div data-g="o">
						<p className="fc-label">Order:</p>
						<p className="fc-val">{order}</p>
					</div>
					<div data-g="f">
						<p className="fc-label">Family:</p>
						<p className="fc-val">{family}</p>
					</div>
					<div data-g="g">
						<p className="fc-label">Genus:</p>
						<p className="fc-val">{genus}</p>
					</div>
					<div data-g="s">
						<p className="fc-label">Species:</p>
						<p className="fc-val">{species}</p>
					</div>
				</div>
				<p className="holotype">{holoType}</p>
			</div>
    );
  }
});
