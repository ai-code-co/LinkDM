<script setup lang="ts">
const VERIFIED_SRC =
  'https://cdn.prod.website-files.com/6469c31014f61c2d0620f95c/653a593e084dbed7d7d66275_5f16b71d834f293a268634ec966da12d_verified.webp'

const creators = [
  {
    handle: '@sunsetsandstilettos',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd30f935a26289ff32043_sunsetsandstilettos.avif',
  },
  {
    handle: '@linenoaksinteriors',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd157faaa4136be6ab997_linenoaksinteriors.avif',
  },
  {
    handle: '@laurajaneillustration',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc296619cb8ac7760770e_68778cb1a20faa70ccfaa71e_laura.avif',
  },
  {
    handle: '@eatingbirdfood',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd67483fa35cf718323ba_eatingbirdfood.avif',
  },
  {
    handle: '@zee_styledit',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd396f5cb819383f9a6d3_zee_styledit.avif',
  },
  {
    handle: '@withlovechelss',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb1dc4aa5993b018a9fac_withlovechelss.avif',
  },
  {
    handle: '@just.ingredients',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bca78c82e2c2aba36e64e_653a62e4d04706e312b7b91b_274042394_657432909022093_3331062779210231929_n-p-130x130q80.avif',
  },
  {
    handle: '@sammymontgoms',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc7fcbcd885a3c2186d53_68778bf24b1c94fe3f59466d_sammie.avif',
  },
  {
    handle: '@skincarebytanisha',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc4be8a52d05033fb51ed_skincarebytanisha.avif',
  },
  {
    handle: '@everyday.holly',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc561fd632e2dd4404fab_338584150_766060211493134_2347198203016044574_n.avif',
  },
  {
    handle: '@nicoles_outfit_inspirations',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd280d7f42e25dc175e7e_nicoles_outfit_inspirations.avif',
  },
  {
    handle: '@the_broadmoor_house',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc3f0ed111822d3282525_the_broadmoor_house.avif',
  },
  {
    handle: '@getschooledinfashion',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bcfd39cbbdcfb22fe1652_getschooledinfashion.avif',
  },
  {
    handle: '@maciejade',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd65e0017efd8127475e5_maciejade.avif',
  },
  {
    handle: '@just.jacsy',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bd11d1fad75647334879d_just.jacsy.avif',
  },
  {
    handle: '@bromabakery',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687b9b3a0f2f3d00d85350a0_bromabakery.avif',
  },
  {
    handle: '@the_pastaqueen',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc84f599213c638b6e40d_68778c31f58ba720b58db8b8_pasta-queen.avif',
  },
  {
    handle: '@yummytoddlerfood',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bcbb28dcd6a3016f12714_653a5f9ee28b40d0140302e1_354632951_594619056107177_5728868031725069689_n-p-130x130q80.avif',
  },
  {
    handle: '@nutritionbymia',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc210bc071a994ff26e9b_672231adc38bc5ca42778e9a_277970277_498831225294744_1641848509850059115_n-p-130x130q80.avif',
  },
  {
    handle: '@snipestwins',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc5b874cb01181070d75d_snipestwins.avif',
  },
  {
    handle: '@palmettoporchathome',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bc4594531fd966780b8c7_palmettoporchathome.avif',
  },
  {
    handle: '@mytexashouse',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bca9490b41b1702540e09_653a62b2c47238f54d088b7d_393229692_860880775305979_5655310637390738132_n-p-130x130q80.avif',
  },
]

const brands = [
  {
    handle: '@einsider',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb8f4ed111822d3259e65_einsider.avif',
  },
  {
    handle: '@enews',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb8daa425ef266817f615_enews.avif',
  },
  {
    handle: '@allure',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/690179d7faf176972c4b065c_allure.webp',
  },
  {
    handle: '@shoptoday',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bae44ce912a45b88c8712_66de12b831981ff846896d5c_84624158_525397198107415_4576412899429318656_n.webp',
  },
  {
    handle: '@recetasnestlecl',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb6b6fe4d6ac8713c622a_recetasnestlecl.avif',
  },
  {
    handle: '@food52',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb30f174a15712468dafb_food52.avif',
  },
  {
    handle: '@homebeautiful',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb4c9faaa4136be655082_449506396_995678348419167_5027747440887776067_n.avif',
  },
  {
    handle: '@kinedu',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb836dd22608de8bc9e7a_66de1104d88360182620427a_117976497_1017347315363849_734307989021831220_n.avif',
  },
  {
    handle: '@hauste',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb8ba72a22884714ef3b5_66de0eada3763daba5beec22_275219316_1165363484281421_6553287876108474050_n.avif',
  },
  {
    handle: '@delta',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/6901741eec886070e7c4db3f_delta_logo.webp',
  },
  {
    handle: '@randomhouse',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb82664d38b42e703f976_66de11c6da5a09c9a188f9f3_43816387_1985999311481900_5600479496756002816_n.avif',
  },
  {
    handle: '@nbcselect',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb86bde8d851b3278b9d0_66de0f4611d8c73924c5c637_356968743_618621523570204_4030353012754344838_n.avif',
  },
  {
    handle: '@chatbooks',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/69017a769e5f9af625468abe_chatbooks.webp',
  },
  {
    handle: '@dillards',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb88763ab6569aa8892c9_dillards.avif',
  },
  {
    handle: '@fandango',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687badd333b231556d2a90cf_fandango.webp',
  },
  {
    handle: '@bhgaus',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bae148dcd6a3016eac89e_6724eb952646b05defee095d_452435786_1503881060515339_4393022502367436274_n.webp',
  },
  {
    handle: '@patpat_clothing',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb846ace8fcfd7cd33040_66de10c85feb03b8ce348b49_447917822_470807248672128_1733025685000883998_n.avif',
  },
  {
    handle: '@inspire_me_home_decor',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/6747d8203bd5f4c3b1d87440_422421092_1083333622712111_8551978829093109392_n.jpg',
  },
  {
    handle: '@bondisands',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb9180b8583ef486ed32d_bondisands.avif',
  },
  {
    handle: '@elleaus',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb94372a22884714f1568_6572b66bd2f6a1076ac6b4b1_21433448_868879706599599_1032098465343078400_a.avif',
  },
  {
    handle: '@focalelite',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/66de11188b7957d393bdbd39_339148998_3473025636320294_3692429819968502984_n.jpg',
  },
  {
    handle: '@solidstarts',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb932fd632e2dd43dad29_6572b7cc250219b535758174_101948293_261849201824638_8834040754780241920_n.avif',
  },
  {
    handle: '@sellit',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687bb89686c3d9d704372772_66de0eebe396191369112531_435453917_438345698857058_1324130714629820618_n.avif',
  },
  {
    handle: '@dkbooksus',
    image:
      'https://cdn.prod.website-files.com/64c32f858561c58fd42768e3/687badf0bc071a994fede0f8_6730a7d12c39026fe24b203c_294513646_1410795262665413_928231908438228528_n.webp',
  },
]

const nicheBorderClasses = [
  'border-purple-500',
  'border-blue-500',
  'border-red-500',
  'border-pink-500',
  'border-gray-900',
  'border-green-500',
  'border-indigo-500',
  'border-orange-500',
  'border-cyan-500',
  'border-rose-500',
  'border-violet-500',
  'border-sky-500',
  'border-emerald-500',
  'border-amber-500',
  'border-fuchsia-500',
  'border-teal-500',
]

const niches = [
  'Mavely Creators',
  'Fashion Creators',
  'Food Creators',
  'Beauty Creators',
  'Non-Profit Organisations',
  'Fitness Creators',
  'Tech Reviewers',
  'Travel Bloggers',
  'Parenting Creators',
  'Real Estate Agents',
  'Musicians',
  'Artists',
  'Coaches',
  'Photographers',
  'Small Business',
  'E-commerce',
]
</script>

<template>
  <section class="bg-[#f7f7f7] py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-8">
      <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Who&apos;s Using LinkDM?
      </h2>

  
      <p class="mt-12 text-center text-xs font-bold uppercase tracking-wider text-[#1487fa]">
        Creators
      </p>
      <div class="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
        <div
          v-for="c in creators"
          :key="c.handle"
          class="inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm"
        >
          <img
            :src="c.image"
            alt=""
            class="h-9 w-9 shrink-0 rounded-full object-cover"
            width="36"
            height="36"
            loading="lazy"
          />
          <span class="truncate text-sm font-medium text-gray-900">{{ c.handle }}</span>
          <img
            :src="VERIFIED_SRC"
            alt="Verified"
            class="h-4 w-4 shrink-0"
            width="16"
            height="16"
            loading="lazy"
          />
        </div>
      </div>

     
      <p class="mt-14 text-center text-xs font-bold uppercase tracking-wider text-[#1487fa]">
        Brands
      </p>
      <div class="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
        <div
          v-for="b in brands"
          :key="b.handle"
          class="inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm"
        >
          <img
            :src="b.image"
            alt=""
            class="h-9 w-9 shrink-0 rounded-full object-cover"
            width="36"
            height="36"
            loading="lazy"
          />
          <span class="truncate text-sm font-medium text-gray-900">{{ b.handle }}</span>
          <img
            :src="VERIFIED_SRC"
            alt="Verified"
            class="h-4 w-4 shrink-0"
            width="16"
            height="16"
            loading="lazy"
          />
        </div>
      </div>

      
      <p class="mt-14 text-center text-xs font-bold uppercase tracking-wider text-[#1487fa]">
        Niches
      </p>
      <div class="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          v-for="(label, i) in niches"
          :key="'n-' + i"
          type="button"
          class="rounded-full border border-solid bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:border-dashed hover:bg-gray-50"
          :class="nicheBorderClasses[i % nicheBorderClasses.length]"
        >
          {{ label }}
        </button>
      </div>
    </div>
  </section>
</template>
