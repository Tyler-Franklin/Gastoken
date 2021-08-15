module.exports = {
    testrpcOptions: '--port 8555 ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501201,1000000000000000000000000" ' +
        ' --account="0x99fde12fcecdf3bd0d91b6bd8837cee886598938aef3c9c97c64220f73db06e1,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501202,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501203,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501204,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501205,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501206,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501207,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501208,1000000000000000000000000" ' +
        ' --account="0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501209,1000000000000000000000000"',
    copyPackages: ['@openzeppelin/contracts'],
    norpc: true,
    skipFiles: ['Migrations.sol', 'ChiToken.full.sol']
}