import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="align-middle text-center text-banner -mt-12">
      <div className="h-screen flex ">
        <div className="grow space-y-10 self-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Discover your web3 identity
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>

          <form className="flex justify-center pt-14">
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Domain
            </label>
            <div class="relative w-1/3">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Find your new domain"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <h4 class="text-2xl font-bold dark:text-white pt-20">
            Search for decentralized names with our verified integrations
          </h4>
        </div>
      </div>
      <div className="flex bg-gray-900 text-white h-screen">
        <div className="grow space-y-20 self-center">
          <h1 class="text-5xl font-extrabold dark:text-gray-900">
            Stress-free names, powered by denam
          </h1>
          <h3 class="text-3xl font-extrabold ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Put the power of denam behind your decentralized identity.
          </h3>
          <p></p>
          <div class="grid grid-cols-3 gap-y-4 gap-x-1">
            <div className="">
              <h3 class="text-3xl font-bold dark:text-white">Simple Search</h3>
              <p class="mb-3 text-lg font-light text-gray-400 md:text-xl dark:text-gray-400">
                A Web3 domain uniquely represents your on-chain indentity. We
                make it easy.
              </p>
            </div>
            <div class="">
              <h3 class="text-3xl font-bold dark:text-white">
                Multichain-Enabled
              </h3>
              <p class="mb-3 text-lg font-light text-gray-400 md:text-xl dark:text-gray-400">
                Whether that be Ethereum, Polygon, or Avalanche. We got your
                covered.
              </p>
            </div>
            <div class="">
              <h3 class="text-3xl font-bold dark:text-white">
                Empowering the Ecosystem
              </h3>
              <p class="mb-3 text-lg font-light text-gray-400 md:text-xl dark:text-gray-400">
                With 100+ of blockchains, join the ever-growing domain
                ecosystem.
              </p>
            </div>
            <div class="col-start-1 col-end-7 mt-14">
              <h3 class="text-3xl font-bold dark:text-white">
                Searching for your new domain shouldn't incur additional
                charges.<br className="mt-5"></br>
                <span class="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">
                  We believe in empowering users with their web3 identitiy.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen">
        <h2>No Token. No DAO. No Bullshit.</h2>
        <p>
          Searching for your new domain shouldn't incur additional charges. We
          believe in empowering users with their Web3 identitiy.
        </p>
      </div> */}
    </div>
  );
}