# IOST Crowd Funding Contract

This repo is a part of the IOST developer tutorial series. Here you can find the IOST contracts to create your own crowd funding platform.

Before doing the below steps, please make sure that your local IOST node is running. Please refer [here](https://github.com/vinayakkalra/IOST-setup-dev) if you dont know how to do that

To publish the contract run:

> iwallet --account admin --chain_id 1020 publish FundMe.js FundMe.js.abi

To interact with the fundme function in the contract run:

> iwallet --account admin --chain_id 1020 call "<contract address from above>" "fundme" '[1]'
>
> iwallet --account <some other account> --chain_id 1020 call "<contract address from above>" "fundme" '[1]'
  
To check total balance stored in the contract : 
  
> iwallet --account admin --chain_id 1020 call "<contract address from above>" "getTotalFunds" '[]'

To withdraw funds to the owner account :

> iwallet --account admin --chain_id 1020 call "<contract address from above>" "withdrawFunds" '[]'
  
