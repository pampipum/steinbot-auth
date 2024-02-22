<!-- SolarPanelReport.svelte -->
<script>
    import { Icon, Sun, AdjustmentsHorizontal, ChartBar, Bolt} from "svelte-hero-icons";

    export let solarPanelReport;

    // We assume the import for Cash icon is done if you want to use a specific icon for Financial Benefits
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
            <!-- Adjusted Efficiency -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Adjusted Efficiency</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Adjusted Efficiency']}</span>
                </div>
            </div>
            <!-- Annual Electricity Production -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{ChartBar}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Annual Electricity Production</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Annual Electricity Production']}</span>
                </div>
            </div>
            <!-- Financial Benefits -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{Bolt}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Financial Benefits</h3>
                    <div class="text-xs leading-none text-gray-400 font-normal">
                        <p>Annual Savings: {solarPanelReport['Financial Benefits']['Annual Savings']}</p>
                        <p>Payback Period: {solarPanelReport['Financial Benefits']['Payback Period']}</p>
                        <p>Total System Cost: {solarPanelReport['Financial Benefits']['Total System Cost']}</p>
                    </div>
                </div>
            </div>
            <!-- Environmental Benefits -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
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
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">Lifespan</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['Lifespan']}</span>
                </div>
            </div>

            <!-- System Size kW -->
            <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <Icon src="{AdjustmentsHorizontal}" class="h-6 w-6 text-gray-900"/>
                </span>
                <div class="flex flex-col flex-1">
                    <h3 class="text-sm font-medium">System Size</h3>
                    <span class="text-xs leading-none text-gray-400 font-normal">{solarPanelReport['System Size kW']}</span>
                </div>
            </div>
        </div>
    </div>
</div>
