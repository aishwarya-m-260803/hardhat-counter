const {expect} = require('chai');

describe ("Counter Contract", function (){
    let counter;

    beforeEach(async function (){
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.waitForDeployment();

    });

    it("Should start with 0", async function(){
        expect(await counter.get()).to.equal(0);
    });

    it("Should increment correctly", async function(){
        await counter.increment();
        expect(await counter.get()).to.equal(1);
    });

    it("Should decrement correctly", async function(){
        await counter.increment();
        await counter.decrement();
        expect(await counter.get()).to.equal(0);
    });

    it("Should not go below zero", async function(){
        await expect(counter.decrement()).to.be.revertedWith("Count cannot be negative");
    });

    it("Should reset correctly", async function(){
        await counter.increment();
        await counter.reset();
        expect(await counter.get()).to.equal(0);
    });
});