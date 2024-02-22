<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="min-h-screen flex items-center justify-center mt-[-150px] lg:mt-0">
  <div class="text-center w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-4 p-4">
    <div class="w-full lg:w-2/3 mb-6 lg:mb-0">
      <h1 class="text-5xl lg:text-7xl font-bold mb-6">Adopt Solar</h1>
      <p class="py-4">Steinbo(T) is an AI-powered assistant that enables homeowners and professionals to find their ideal Solar Setup.</p>
      <ul class="list-disc text-left mx-auto mb-4" style="max-width: 600px;">
        <li><span class="font-semibold">Personalized Solar Analysis:</span> Get tailored recommendations based on advanced AI calculations. 🌞</li>
        <li><span class="font-semibold">Save on Energy Bills:</span> Detailed financial breakdowns and savings forecasts. 💰</li>
        <li><span class="font-semibold">Reduce Your Carbon Footprint:</span> Contribute to a greener planet by adopting solar energy. 🌱</li>
      </ul>
    </div>
    <div class="w-full lg:w-1/3 flex flex-col items-center">
      <Avatar.Root class="h-48 w-48 lg:h-72 lg:w-72 mb-4"> <!-- Responsive size adjustment -->
        <Avatar.Image 
          src={'avatar_bot.png'} 
          alt={'Steinbo(T) avatar'}
          class="h-full w-full object-cover rounded-full"
        />
        <Avatar.Fallback class="flex items-center justify-center h-full w-full bg-gray-200 rounded-full">
          SB
        </Avatar.Fallback>
      </Avatar.Root>
      <Button on:click={() => window.location.href='/app'} class="mt-4">Get Started with Steinbo(T) -></Button>
    </div>
  </div>
</div>

