<!-- SolarPanelData.svelte -->
<script lang="ts">
    import { Icon, AdjustmentsHorizontal, ArrowTrendingUp, Bolt, ChartBar, Sun } from "svelte-hero-icons";
    
    // Define a TypeScript interface for the expected shape of solarPanelData
    interface SolarPanelData {
        area_m2: number;
        electric_yield: number;
        orientation: number;
        slope: number;
    }
    
    // Use the SolarPanelData interface for the solarPanelData prop
    export let solarPanelData: SolarPanelData;
</script>

<div class="absolute bottom-0 left-0 p-5 max-w-sm">
    <div class="rounded-3xl bg-white p-4 shadow-lg">
        <div class="flex items-center space-x-2">
            <!-- Generic Solar Panel Icon -->
            <Icon src="{Sun}" class="h-8 w-8 text-gray-900"/>
            <div class="space-y-0.5 flex-1">
                <h3 class="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                    Solar Panel Analysis
                </h3>
                <p class="text-sm font-normal text-gray-400 leading-none">
                    Detailed Insights
                </p>
            </div>
        </div>
        <div class="mt-9 grid gap-2.5">
            <!-- Area -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Area Icon -->
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Surface Area</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelData.area_m2.toFixed(2)} m²</span>
                </div>
            </div>

            <!-- Orientation -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Orientation Icon -->
                    <Icon src="{ArrowTrendingUp}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Orientation</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelData.orientation.toFixed(0)}°</span>
                </div>
            </div>

            <!-- Slope -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Slope Icon -->
                    <Icon src="{ChartBar}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Slope</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelData.slope.toFixed(2)}°</span>
                </div>
            </div>

            <!-- Electric Yield -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Electric Yield Icon -->
                    <Icon src="{Bolt}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Electric Yield</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelData.electric_yield.toFixed(2)} kWh</span>
                </div>
            </div>
        </div>
    </div>
</div>


