<template>
    <div class="heading">
        <span>
            <b>{{ data.item.name }}</b>
        </span>

        <span class="ms-2 badge badge-info">
            Environment: {{ data.item.envName }}
        </span>

        <i class="fas fa-chevron-down"></i>
    </div>

    <div class="body">
        <div class="table-responsive">
            <table 
                v-for="(data, index) in data.item.datas" :key="index"
                class="table table-striped table-hover table-sm"
            >
                <thead>
                    <tr>
                        <th scope="col">
                            <b>{{ data.name }}</b>
                        </th>

                        <template v-for="(a, b) in uniqueKeys(data)" :key="b">
                            <th>
                                <b>{{ a.label }}</b>
                            </th>
                        </template>
                    </tr>
                </thead>

                <tbody class="table-striped">
                    <tr>
                        <th></th>

                        <template v-for="(a, b) in uniqueKeys(data)" :key="b">
                            <th>
                                {{ data[a.key] }}
                            </th>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import SlideToggle from '../js/animations/slide-toggle';
import { toRaw } from 'vue';
import Swal from 'sweetalert2';

export default {
    props: {
        data: Object,
    },
    methods: {
        ucfirst: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        uniqueKeys: function (a) {
            a = Object.keys(toRaw(a));
            const arr = [];

            a.forEach(b => {
                if (b === 'name') {
                    return false;
                }

                arr.push({
                    key: b,
                    label: this.ucfirst(b),
                    missingLengths: 4 - a.length,
                });
            });

            return arr;
        },
    },
    mounted: async function () {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });

        Array.from(document.querySelectorAll('.heading')).map(node => {
            node.onclick = e => {
                e.preventDefault();
                e.currentTarget.parentNode.classList.toggle('active');

                new SlideToggle(e.currentTarget.parentNode.querySelector('.body'));
            }
        });

        Array.from(document.querySelectorAll('table tbody tr th')).map(node => {
            if (node.textContent.length === 0) {
                return false;
            }

            node.onclick = e => {
                e.preventDefault();

                const text = e.currentTarget.textContent.trim();

                navigator.clipboard.writeText(text).then(() => {
                    Toast.fire({
                        icon: 'success',
                        title: `Copied "${text}" into your clipboard!`
                    });
                });
            };
        });
    }
};
</script>

<style scoped lang="scss">
button {
    padding-left: 12px;
    padding-right: 12px;
}

.badge {
    font-size: 80%;
}

table {
    thead {
        tr {
            th {
                b {
                    min-width: 150px;
                    white-space: nowrap;
                    overflow: hidden;
                    display: block;
                }
            }
        }
    }

    tbody {
        tr {
            th {
                &:first-child {
                    width: 150px;
                }

                &:not(:first-child) {
                    width: 25%;
                }

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
