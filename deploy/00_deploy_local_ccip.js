const { getNamedAccounts, deployments, network } = require("hardhat");
const { developmentChains } = require("../common-config-help")

module.exports = async({getNamedAccounts, deployments}) =>{
    if (developmentChains.includes(network.name)){
        const { firstAccount } = await getNamedAccounts()
        const { deploy, log } = deployments
        log("deploy the CCIP local simulator")
        await deploy("CCIPLocalSimulator", {
            contract: "CCIPLocalSimulator",
            from: firstAccount,
            log: true,
            args: []
        })
        log("CCIP local simulator deployed!")
    }else{
        log("not in local, skip CCIP local")
    }
}

module.exports.tags = ["test","all"]