<?php

class IncreaseClickTargetsPlugin extends Gdn_Plugin {

    public function base_render_before($sender) {
        $sender->addJsFile('increaseclicktargets.js', 'plugins/IncreaseClickTargets');
    }

}
