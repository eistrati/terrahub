'use strict';

const Distributor = require('../helpers/distributor');
const TerraformCommand = require('../terraform-command');

class InitCommand extends TerraformCommand {
  /**
   * Command configuration
   */
  configure() {
    this
      .setName('init')
      .setDescription('Run `terraform init` across multiple terraform scripts')
    ;
  }

  /**
   * @returns {Promise}
   */
  run() {
    const config = this.getConfigTree();
    const distributor = new Distributor(['prepare', 'init'], config);

    return distributor
      .run()
      .then(() => Promise.resolve('Done'));
  }
}

module.exports = InitCommand;
