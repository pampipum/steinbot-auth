<!-- SolarPanelReport.svelte -->
<script>
    import { Icon, Sun, AdjustmentsHorizontal, ChartBar, Bolt } from "svelte-hero-icons";

    export let solarPanelReport;
</script>

<div class="absolute bottom-0 left-0 p-5 max-w-sm">
    <div class="rounded-3xl bg-white p-4 shadow-lg">
        <div class="flex items-center space-x-2">
            <Icon src="{Sun}" class="h-8 w-8 text-gray-900"/>
            <div class="space-y-0.5 flex-1">
                <h3 class="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                    Solar Panel Report
                </h3>
                <p class="text-sm font-normal text-gray-400 leading-none">
                    Comprehensive Analysis
                </p>
            </div>
        </div>
        <div class="mt-9 grid gap-2.5">
            <!-- Potential System Size -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Potential System Size</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Potential System Size']} kW</span>
                </div>
            </div>
            <!-- Annual Electricity Production -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{ChartBar}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Annual Electricity Production</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Annual Electricity Production']} kWh</span>
                </div>
            </div>
            <!-- Financial Benefits (conditionally displayed if available) -->
            {#if solarPanelReport['Financial Benefits']}
                <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                    <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                        <Icon src="{Bolt}" class="h-6 w-6 text-gray-900"/>
                    </span>
                    <div class="flex flex-col flex-1">
                        <h3 class="text-sm font-medium">Financial Benefits</h3>
                        <div class="text-xs leading-none text-gray-400 font-normal">
                            <p>Annual Savings: {solarPanelReport['Financial Benefits']['Annual Savings']}</p>
                            <p>Total System Cost: {solarPanelReport['Financial Benefits']['Total System Cost']}</p>
                            <p>Payback Period: {solarPanelReport['Financial Benefits']['Payback Period']}</p>
                        </div>
                    </div>
                </div>
            {/if}
            <!-- Environmental Benefits -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Icon for Environmental Benefits -->
                    <Icon src="{Sun}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Environmental Benefits</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Environmental Benefits']}</span>
                </div>
            </div>

            <!-- Lifespan -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <!-- Icon for Lifespan -->
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Lifespan</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport.Lifespan} years</span>
                </div>
            </div>

    </div>
</div>
</div>

