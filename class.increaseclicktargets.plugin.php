<?php if (!defined('APPLICATION')) exit();

$PluginInfo['IncreaseClickTargets'] = array(
    'Name' => 'Increase Click Targets',
    'Description' => 'Makes the whole row clickable for various items.',
    'Version' => '0.2',
    // The default mobile theme implements this already.
    'MobileFriendly' => false,
    'Author' => 'Bleistivt',
    'AuthorUrl' => 'http://bleistivt.net',
    'License' => 'GNU GPL2'
);

class IncreaseClickTargetsPlugin extends Gdn_Plugin {

    public function Base_Render_Before($Sender) {
        $Sender->AddJsFile('increaseclicktargets.js', 'plugins/IncreaseClickTargets');
    }

}
