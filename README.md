Eclipse Front-End WIP
========

Getting Started
---------------

1. Install yarn (or npm):

  `brew install yarn`

2. Install dependencies using yarn:

  `yarn`

4. Start development server:

  `yarn start`

5. Open [http://localhost:3002]()


Built Routes
---------------
<Route exact path={`/`} component={HomeScreen}/>
<Route exact path={`/connect`} component={Connect}/>

<Route exact path={`/dashboard`} component={Dashboard}/>
<Route exact path={`/holdings`} component={Holdings}/>
<Route exact path={`/profile/:userId`} component={Profile}/>
<Route exact path={`/coin/:coinSymbol`} component={Coin}/>
<Route exact path={`/settings`} component={Settings}/>


Building
---------------

1. Run build script:

  `yarn build`

2. You can now used the contents of the `build` folder and serve the page
