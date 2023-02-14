<script>
	import {CurrencyApp, Settings, GearSvg, StartSvg, TabBox} from "../";
    const items = [
        {
            head: 'Calculator',
            content: 'This is a text about Squirrels 🐿️',
            icon: StartSvg,
            component: CurrencyApp,
            data: false,
        },
        {
            head: 'Settings',
            content: 'This is a text about Rabbits 🐇',
            icon: GearSvg,
            component: Settings,
            data: false,
        }
    ];
    export let label = "Currency Calculator I";
</script>

<div {...$$restProps}>
<TabBox {items} {label}>
</TabBox>
</div>
