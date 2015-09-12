<?php

$PluginInfo['IncreaseClickTargets'] = [
    'Name' => 'Increase Click Targets',
    'Description' => 'Makes the whole row clickable for various items.',
    'Version' => '0.2',
    // The default mobile theme implements this already.
    'MobileFriendly' => false,
    'Author' => 'Bleistivt',
    'AuthorUrl' => 'http://bleistivt.net',
    'License' => 'GNU GPL2'
];

class IncreaseClickTargetsPlugin extends Gdn_Plugin {

    public function base_render_before($sender) {
        $sender->addJsFile('increaseclicktargets.js', 'plugins/IncreaseClickTargets');
    }

}
