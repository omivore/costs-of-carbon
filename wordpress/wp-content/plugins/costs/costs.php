<?php
/**
 * Plugin Name:   Costs of Carbon
 * Description:   A carbon emissions calculator that calculates your carbon footprint so you know how much to offset it by
 * Version:       0.1
 * Author:        Extra Xtra
 */

class xtra_Costs_Caclulator extends WP_Widget {
    // Set up the widget name and description.
    public function __construct() {
        $widget_options = array('classname' => 'costs_carbon_calculator',
                                'description' => 'A carbon footprint offset calculator' );
        parent::__construct( 'costs_carbon_calculator', 'Carbon Calculator', $widget_options );
    }

    // Create the widget output.
    public function widget( $args, $instance ) {
        $blog_title = get_bloginfo( 'name' );
        $tagline = get_bloginfo( 'description' );
        echo $args['before_widget'] . $args['before_title'] . $instance['funds_use'] . $args['after_title']; ?>
        <div id="xtra_offsetCalculator"></div>
        <script src="wp-content/plugins/costs/offset.js"></script>
        <?php echo $args['after_widget'];
    }

    // Create the admin area widget settings form.
    public function form($instance) {
        $funds_use = !empty( $instance['funds_use'] ) ? $instance['funds_use'] : ''; ?>
        <p>
            <label for="<?php echo $this->get_field_id('funds_use'); ?>">Where will the funds go?</label>
            <textarea id="<?php echo $this->get_field_id('funds_use'); ?>" name="<?php echo $this->get_field_name('funds_use'); ?>" value="<?php echo esc_attr($funds_use); ?>"></textarea>
        </p><?php
    }

    // Apply settings to the widget instance.
    public function update($new_instance, $old_instance) {
        $instance = $old_instance;
        $instance['funds_use'] = strip_tags($new_instance['funds_use']);
        return $instance;
    }

}

// Register the widget.
function xtra_register_costs_calculator() {
    register_widget('xtra_Costs_Caclulator');
}
add_action('widgets_init', 'xtra_register_costs_calculator');
?>
