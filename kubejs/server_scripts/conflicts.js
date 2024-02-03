ServerEvents.recipes(event => {

  // Yellorium
  event.remove({ id: 'bigreactors:crafting/yellorium_component_to_storage' })
  event.remove({ id: 'bigreactors:crafting/yellorium_ingot_to_nugget' })
  
  // Fire for Standing Torch
  event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // GT Duplicate Removals
  event.remove({ id: 'gtceu:shaped/block_compress_nether_star' })
  event.remove({ id: 'gtceu:shaped/block_compress_ender_pearl' })
  event.remove({ id: 'gtceu:shaped/block_compress_flint' })

  // GT conflicts, Powah Uraninite
  event.remove({ id: 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:shaped/compress_uraninite_to_ore_block' })
  event.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  event.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
  event.shapeless('gtceu:raw_uraninite_block', '9x gtceu:raw_uraninite').id('atm9:gtceu/shaped_compress_uraninite_to_ore_block')

  // Reborn Storage conflicts
  event.remove({ id: 'rebornstorage:disks/small_item_disk' })
  event.remove({ id: 'rebornstorage:disks/small_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/small_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/medium_item_disk' })
  event.remove({ id: 'rebornstorage:disks/medium_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/medium_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/large_item_disk' })
  event.remove({ id: 'rebornstorage:disks/large_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/large_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/larger_item_disk' })
  event.remove({ id: 'rebornstorage:disks/larger_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/larger_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/small_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/small_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/small_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/medium_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/medium_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/medium_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/large_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/large_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/large_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/larger_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/larger_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/larger_fluid_disk_part' })

  // Extra Storage conflicts
  event.remove({ id: 'extrastorage:advanced_importer' })
  event.remove({ id: 'extrastorage:advanced_exporter' })
  event.remove({ id: 'extrastorage:storage_block/block_256k' })
  event.remove({ id: 'extrastorage:storage_block/block_1024k' })
  event.remove({ id: 'extrastorage:storage_block/block_4096k' })
  event.remove({ id: 'extrastorage:storage_block/block_16384k' })
  event.remove({ id: 'extrastorage:storage_block/block_16384k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_65536k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_262144k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_1048576k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_256k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_256k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_1024k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_1024k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_4096k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_4096k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_16384k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_16384k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_65536k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_65536k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_262144k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_262144k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_1048576k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_1048576k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_256k' })
  event.remove({ id: 'extrastorage:part/storagepart_1024k' })
  event.remove({ id: 'extrastorage:part/storagepart_4096k' })
  event.remove({ id: 'extrastorage:part/storagepart_16384k' })
  event.remove({ id: 'extrastorage:part/storagepart_16384k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_65536k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_262144k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_1048576k_fluid' })
})

