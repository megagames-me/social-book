<script lang="ts">
    import { session } from "$app/stores";
    import { signOut as authSignOut } from "sk-auth/client";

    async function signOutForm(e: SubmitEvent) {
      e.preventDefault();
      await fetch("/api/auth/signout")
      window.location.reload();
      return false;
    }

</script>

<div>
  <!-- If the user is logged in, show this page. -->
    {#if $session?.user}

    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4  focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" referrerpolicy="no-referrer" src={$session.user.connections.google.picture} alt={$session.user.connections.google.name}>
      </button>
      <!-- Dropdown menu -->
      <div class="hidden z-50 my-4 text-slate-white list-none  rounded divide-y 100 shadow bg-slate-800 divide-slate-700" id="user-dropdown">
        <div class="py-3 px-4">
          <span class="block text-sm  text-white">{$session.user.connections.google.name}</span>
          <span class="block text-sm font-medium  truncate text-gray-400">{$session.user.connections.google.email}</span>
        </div>
        <ul class="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="/users/{$session.user.id}" class="block py-2 px-4 text-sm  hover:bg-gray-700 text-gray-200 hover:text-white">Profile</a>
          </li>
        </ul>
        <ul class="py-1" aria-labelledby="user-menu-button">
          <!-- <li>
            <a href="#" class="block py-2 px-4 text-sm  hover:bg-gray-700 text-gray-200 hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm  hover:bg-gray-700 text-gray-200 hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm  hover:bg-gray-700 text-gray-200 hover:text-white">Earnings</a>
          </li> -->
          <li>
            <form method="POST" action="/api/auth/signout" on:submit={signOutForm}><button type="submit" class="block py-2 px-4 text-sm  hover:bg-gray-700 text-gray-200 hover:text-white w-full text-left">Sign out</button></form>
          </li>
        </ul>
      </div>
    
    {:else}
      <a href="/api/auth/signin/google?redirect=/" class="text-slate-400 hover:text-slate-500 no-underline">Login</a>
    {/if}
</div>

