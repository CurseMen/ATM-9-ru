// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({ id: 'gtceu:extruder/nan_certificate' })

    allthemods.recipes.gtceu.extruder('nan_certificate_modified')
        .itemInputs(['64x gtceu:neutronium_block', '64x gtceu:neutronium_block'])
        .itemOutputs('gtceu:nan_certificate')
        .duration(16400)
        .EUt(UHV)

    allthemods.recipes.gtceu.chemical_bath('kubejs:inert_star')
        .itemInputs('minecraft:wither_skeleton_skull')
        .inputFluids(Fluid.of('gtceu:polyethylene', 1000))
        .itemOutputs('kubejs:inert_nether_star')
        .duration(10)
        .EUt(IV)

    allthemods.recipes.gtceu.mixer('kubejs:inert_fluid')
        .itemInputs('kubejs:inert_nether_star')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('gtceu:inert_nether_essence', 2304))
        .duration(12)
        .EUt(IV)

    allthemods.recipes.gtceu.autoclave('kubejs:autoclave/nether_star')
        .itemInputs('gtceu:polyethylene_dust')
        .inputFluids(Fluid.of('gtceu:inert_nether_essence', 144))
        .itemOutputs('minecraft:nether_star')
        .duration(6)
        .EUt(EV)

    allthemods.recipes.gtceu.arc_furnace('nan/its_a_joke')
        .itemInputs(Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:neutronium"}}').strongNBT())
        .inputFluids(Fluid.of('gtceu:oxygen_plasma', 100))
        .chancedOutput('2x gtceu:neutronium_nugget', 200, 50)
        .chancedOutput('gtceu:neutronium_nugget', 50, 25)
        .chancedOutput('gtceu:neutronium_nugget', 50, 25)
        .chancedOutput('gtceu:neutronium_nugget', 50, 25)
        .duration(25600)
        .EUt(ULV)

    // ALCR
    allthemods.recipes.gtceu.assembly_line('advanced_large_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', '3x #gtceu:circuits/iv', '15x gtceu:nitinol_plate', '4x gtceu:platinum_single_cable')
        .itemOutputs('gtceu:advanced_large_chemical_reactor')
        .inputFluids(
            Fluid.of('gtceu:copper', 4608),
            Fluid.of('gtceu:tin', 4608),
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 8000)
        )
        .duration(500)
        .scannerResearch(Item.of('gtceu:large_chemical_reactor'))
        .EUt(IV)

    // NeoCube
    allthemods.recipes.gtceu.assembly_line('neocube')
        .itemInputs('gtceu:assembly_line', '4x #gtceu:circuits/uv', '9x gtceu:naquadah_alloy_plate', '16x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire', '2x gtceu:zpm_field_generator')
        .itemOutputs('gtceu:neocube')
        .inputFluids(
            Fluid.of('gtceu:lubricant', 4000),
            Fluid.of('gtceu:soldering_alloy', 2304)
        )
        .duration(500)
        .stationResearch(b => b.researchStack(Item.of('gtceu:assembly_line')).CWUt(96).EUt(UV))
        .EUt(ZPM)

    // fluix, sky steel dust, and shattered singularity maceration
    allthemods.recipes.gtceu.macerator('macerate_fluix')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(80)
        .EUt(ULV)

    allthemods.recipes.gtceu.macerator('macerate_sky_stone')
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .duration(80)
        .EUt(ULV)

    allthemods.recipes.gtceu.macerator('macerate_shattered_singularity')
        .itemInputs('advanced_ae:shattered_singularity')
        .itemOutputs('advanced_ae:quantum_infused_dust')
        .duration(80)
        .EUt(ULV)

    // AE2 charger recipe for GT certus
    allthemods.custom({
        type: "ae2:charger",
        ingredient: { item: "gtceu:certus_quartz_gem" },
        result: { item: "ae2:charged_certus_quartz_crystal" }
    })

    // AE2 printed circuits in forming press
    allthemods.recipes.gtceu.forming_press('ae2/printed_logic_circuit')
        .itemInputs('minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/universal/printed_logic_circuit')
        .itemInputs('minecraft:gold_ingot')
        .notConsumable('kubejs:universal_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/ultimate_universal/printed_logic_circuit')
        .itemInputs('minecraft:gold_ingot')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/printed_silicon_circuit')
        .itemInputs('ae2:silicon')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/universal/printed_silicon_circuit')
        .itemInputs('ae2:silicon')
        .notConsumable('kubejs:universal_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/ultimate_universal/printed_silicon_circuit')
        .itemInputs('ae2:silicon')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/printed_engineering_circuit')
        .itemInputs('minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/universal/printed_engineering_circuit')
        .itemInputs('minecraft:diamond')
        .notConsumable('kubejs:universal_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/ultimate_universal/printed_engineering_circuit')
        .itemInputs('minecraft:diamond')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/printed_calculation_circuit')
        .itemInputs('ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/universal/printed_calculation_circuit')
        .itemInputs('ae2:certus_quartz_crystal')
        .notConsumable('kubejs:universal_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/ultimate_universal/printed_calculation_circuit')
        .itemInputs('ae2:certus_quartz_crystal')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('megacells/printed_accumulation_circuit')
        .itemInputs('megacells:sky_steel_ingot')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('megacells/universal/printed_accumulation_circuit')
        .itemInputs('megacells:sky_steel_ingot')
        .notConsumable('kubejs:universal_addon_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('megacells/ultimate_universal/printed_accumulation_circuit')
        .itemInputs('megacells:sky_steel_ingot')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('megacells:printed_accumulation_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('appflux/printed_energy_circuit')
        .itemInputs('appflux:charged_redstone')
        .notConsumable('appflux:energy_processor_press')
        .itemOutputs('appflux:printed_energy_processor')
        .duration(80)
        .EUt(MV)

    allthemods.recipes.gtceu.forming_press('appflux/universal/printed_energy_circuit')
        .itemInputs('appflux:charged_redstone')
        .notConsumable('kubejs:universal_addon_press')
        .itemOutputs('appflux:printed_energy_processor')
        .duration(80)
        .EUt(MV)

    allthemods.recipes.gtceu.forming_press('appflux/ultimate_universal/printed_energy_circuit')
        .itemInputs('appflux:charged_redstone')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('appflux:printed_energy_processor')
        .duration(80)
        .EUt(MV)

    allthemods.recipes.gtceu.forming_press('aae/printed_quantum_circuit')
        .itemInputs('advanced_ae:quantum_alloy')
        .notConsumable('advanced_ae:quantum_processor_press')
        .itemOutputs('advanced_ae:printed_quantum_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('aae/universal/printed_quantum_circuit')
        .itemInputs('advanced_ae:quantum_alloy')
        .notConsumable('kubejs:universal_addon_press')
        .itemOutputs('advanced_ae:printed_quantum_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('aae/ultimate_universal/printed_quantum_circuit')
        .itemInputs('advanced_ae:quantum_alloy')
        .notConsumable('kubejs:ultimate_universal_press')
        .itemOutputs('advanced_ae:printed_quantum_processor')
        .duration(80)
        .EUt(HV)

    // AE2 processors in forming press
    allthemods.recipes.gtceu.forming_press('ae2/logic_circuit')
        .itemInputs(['ae2:printed_logic_processor', 'minecraft:redstone', 'ae2:printed_silicon'])
        .itemOutputs('ae2:logic_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/engineering_circuit')
        .itemInputs(['ae2:printed_engineering_processor', 'minecraft:redstone', 'ae2:printed_silicon'])
        .itemOutputs('ae2:engineering_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('ae2/calculation_circuit')
        .itemInputs(['ae2:printed_calculation_processor', 'minecraft:redstone', 'ae2:printed_silicon'])
        .itemOutputs('ae2:calculation_processor')
        .duration(80)
        .EUt(LV)

    allthemods.recipes.gtceu.forming_press('megacells/accumulation_circuit')
        .itemInputs(['megacells:printed_accumulation_processor', 'ae2:fluix_dust', 'ae2:printed_silicon'])
        .itemOutputs('megacells:accumulation_processor')
        .duration(80)
        .EUt(HV)

    allthemods.recipes.gtceu.forming_press('appflux/energy_circuit')
        .itemInputs(['appflux:printed_energy_processor', 'minecraft:redstone', 'ae2:printed_silicon'])
        .itemOutputs('appflux:energy_processor')
        .duration(80)
        .EUt(MV)

    allthemods.recipes.gtceu.forming_press('aae/quantum_circuit')
        .itemInputs(['advanced_ae:printed_quantum_processor', 'minecraft:redstone', 'ae2:printed_silicon'])
        .itemOutputs('advanced_ae:quantum_processor')
        .duration(80)
        .EUt(HV)

    // ATO and vanilla silk touched ore maceration recipes
    // Minecraft stone/deepslate/nether ores
    allthemods.recipes.gtceu.macerator('macerate_iron_ore')
        .itemInputs('minecraft:iron_ore')
        .itemOutputs('2x gtceu:crushed_iron_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_iron_ore')
        .itemInputs('minecraft:deepslate_iron_ore')
        .itemOutputs('2x gtceu:crushed_iron_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_coal_ore')
        .itemInputs('minecraft:coal_ore')
        .itemOutputs('4x gtceu:crushed_coal_ore')
        .chancedOutput('minecraft:coal', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_coal_ore')
        .itemInputs('minecraft:deepslate_coal_ore')
        .itemOutputs('4x gtceu:crushed_coal_ore')
        .chancedOutput('minecraft:coal', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_copper_ore')
        .itemInputs('minecraft:copper_ore')
        .itemOutputs('2x gtceu:crushed_copper_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_copper_ore')
        .itemInputs('minecraft:deepslate_copper_ore')
        .itemOutputs('2x gtceu:crushed_copper_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_gold_ore')
        .itemInputs('minecraft:gold_ore')
        .itemOutputs('2x gtceu:crushed_gold_ore')
        .chancedOutput('alltheores:copper_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_gold_ore')
        .itemInputs('minecraft:deepslate_gold_ore')
        .itemOutputs('2x gtceu:crushed_gold_ore')
        .chancedOutput('alltheores:copper_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_gold_ore')
        .itemInputs('minecraft:nether_gold_ore')
        .itemOutputs('4x gtceu:crushed_gold_ore')
        .chancedOutput('alltheores:copper_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_redstone_ore')
        .itemInputs('minecraft:redstone_ore')
        .itemOutputs('10x gtceu:crushed_redstone_ore')
        .chancedOutput('gtceu:cinnabar_gem', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_redstone_ore')
        .itemInputs('minecraft:deepslate_redstone_ore')
        .itemOutputs('10x gtceu:crushed_redstone_ore')
        .chancedOutput('gtceu:cinnabar_gem', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_emerald_ore')
        .itemInputs('minecraft:emerald_ore')
        .itemOutputs('4x gtceu:crushed_emerald_ore')
        .chancedOutput('gtceu:beryllium_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_emerald_ore')
        .itemInputs('minecraft:deepslate_emerald_ore')
        .itemOutputs('4x gtceu:crushed_emerald_ore')
        .chancedOutput('gtceu:beryllium_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_lapis_ore')
        .itemInputs('minecraft:lapis_ore')
        .itemOutputs('12x gtceu:crushed_lapis_ore')
        .chancedOutput('gtceu:lazurite_gem', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_lapis_ore')
        .itemInputs('minecraft:deepslate_lapis_ore')
        .itemOutputs('12x gtceu:crushed_lapis_ore')
        .chancedOutput('gtceu:lazurite_gem', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_diamond_ore')
        .itemInputs('minecraft:diamond_ore')
        .itemOutputs('2x gtceu:crushed_diamond_ore')
        .chancedOutput('gtceu:graphite_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_diamond_ore')
        .itemInputs('minecraft:deepslate_diamond_ore')
        .itemOutputs('2x gtceu:crushed_diamond_ore')
        .chancedOutput('gtceu:graphite_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_quartz_ore')
        .itemInputs('minecraft:nether_quartz_ore')
        .itemOutputs('8x gtceu:crushed_nether_quartz_ore')
        .chancedOutput('gtceu:quartzite_gem', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    // ATO Other Ores
    allthemods.recipes.gtceu.macerator('macerate_other_quartz_ore')
        .itemInputs('alltheores:other_quartz_ore')
        .itemOutputs('16x gtceu:crushed_nether_quartz_ore')
        .chancedOutput('gtceu:quartzite_gem', 1400, 850)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_other_redstone_ore')
        .itemInputs('alltheores:other_redstone_ore')
        .itemOutputs('40x gtceu:crushed_redstone_ore')
        .chancedOutput('gtceu:cinnabar_gem', 1400, 850)
        .duration(400)
        .EUt(2)

    // ATO stone/deepslate/nether/end ores
    allthemods.recipes.gtceu.macerator('macerate_aluminum_ore')
        .itemInputs('alltheores:aluminum_ore')
        .itemOutputs('2x gtceu:crushed_aluminium_ore')
        .chancedOutput('gtceu:bauxite_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_aluminum_ore')
        .itemInputs('alltheores:deepslate_aluminum_ore')
        .itemOutputs('2x gtceu:crushed_aluminium_ore')
        .chancedOutput('gtceu:bauxite_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_aluminum_ore')
        .itemInputs('alltheores:nether_aluminum_ore')
        .itemOutputs('4x gtceu:crushed_aluminium_ore')
        .chancedOutput('gtceu:bauxite_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_lead_ore')
        .itemInputs('alltheores:lead_ore')
        .itemOutputs('2x gtceu:crushed_lead_ore')
        .chancedOutput('alltheores:silver_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_lead_ore')
        .itemInputs('alltheores:deepslate_lead_ore')
        .itemOutputs('2x gtceu:crushed_lead_ore')
        .chancedOutput('alltheores:silver_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_lead_ore')
        .itemInputs('alltheores:nether_lead_ore')
        .itemOutputs('4x gtceu:crushed_lead_ore')
        .chancedOutput('alltheores:silver_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nickel_ore')
        .itemInputs('alltheores:nickel_ore')
        .itemOutputs('2x gtceu:crushed_nickel_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_nickel_ore')
        .itemInputs('alltheores:deepslate_nickel_ore')
        .itemOutputs('2x gtceu:crushed_nickel_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_nickel_ore')
        .itemInputs('alltheores:nether_nickel_ore')
        .itemOutputs('4x gtceu:crushed_nickel_ore')
        .chancedOutput('gtceu:cobalt_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_platinum_ore')
        .itemInputs('alltheores:platinum_ore')
        .itemOutputs('2x gtceu:crushed_platinum_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_platinum_ore')
        .itemInputs('alltheores:deepslate_platinum_ore')
        .itemOutputs('2x gtceu:crushed_platinum_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_platinum_ore')
        .itemInputs('alltheores:nether_platinum_ore')
        .itemOutputs('4x gtceu:crushed_platinum_ore')
        .chancedOutput('alltheores:nickel_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_silver_ore')
        .itemInputs('alltheores:silver_ore')
        .itemOutputs('2x gtceu:crushed_silver_ore')
        .chancedOutput('alltheores:lead_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_silver_ore')
        .itemInputs('alltheores:deepslate_silver_ore')
        .itemOutputs('2x gtceu:crushed_silver_ore')
        .chancedOutput('alltheores:lead_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_silver_ore')
        .itemInputs('alltheores:nether_silver_ore')
        .itemOutputs('4x gtceu:crushed_silver_ore')
        .chancedOutput('alltheores:lead_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_tin_ore')
        .itemInputs('alltheores:tin_ore')
        .itemOutputs('2x gtceu:crushed_tin_ore')
        .chancedOutput('alltheores:iron_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_tin_ore')
        .itemInputs('alltheores:deepslate_tin_ore')
        .itemOutputs('2x gtceu:crushed_tin_ore')
        .chancedOutput('alltheores:iron_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_nether_tin_ore')
        .itemInputs('alltheores:nether_tin_ore')
        .itemOutputs('4x gtceu:crushed_tin_ore')
        .chancedOutput('alltheores:iron_dust', 1400, 850)
        .chancedOutput('gtceu:netherrack_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_ruby_ore')
        .itemInputs('alltheores:ruby_ore')
        .itemOutputs('2x gtceu:crushed_ruby_ore')
        .chancedOutput('gtceu:chromium_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_ruby_ore')
        .itemInputs('alltheores:deepslate_ruby_ore')
        .itemOutputs('2x gtceu:crushed_ruby_ore')
        .chancedOutput('gtceu:chromium_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_sapphire_ore')
        .itemInputs('alltheores:sapphire_ore')
        .itemOutputs('2x gtceu:crushed_sapphire_ore')
        .chancedOutput('alltheores:aluminum_dust', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_deepslate_sapphire_ore')
        .itemInputs('alltheores:deepslate_sapphire_ore')
        .itemOutputs('2x gtceu:crushed_sapphire_ore')
        .chancedOutput('alltheores:aluminum_dust', 1400, 850)
        .chancedOutput('gtceu:deepslate_dust', 6700, 800)
        .duration(400)
        .EUt(2)

    allthemods.recipes.gtceu.macerator('macerate_salt_ore')
        .itemInputs('railcraft:saltpeter_ore')
        .itemOutputs('4x gtceu:crushed_salt_ore')
        .chancedOutput('gtceu:rock_salt_gem', 1400, 850)
        .chancedOutput('gtceu:stone_dust', 6700, 800)
        .duration(400)
        .EUt(2)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
