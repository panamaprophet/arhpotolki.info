<!DOCTYPE html>
<html lang="ru">
    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>АрхПотолки - Менеджер</title>

        <style>
        
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html, body {
                width: 100%;
                font: normal 100% sans-serif;
                line-height: 1.619;
            }

            h3 {
                margin-bottom: 16px;
            }

            ul {
                list-style: none;
            }

            .block {
                /*margin: 16px;
                padding: 16px 0;*/
                margin: 8px;
                /*width: 100%;*/
            }

            .block:not(:last-child){
                border-bottom: 1px dotted #ccc;
            }

            .block__controls {
                background: #ccc;
                padding: 16px;
            }

            .block__list {
                display: flex;
                flex-flow: row wrap;
                list-style: none;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .block__list--categories {
                display: block;
            }

            .block__list-item {
                display: inline-block;
                padding: 8px;
                /*background: lightgreen;*/
                max-width: 25%;
                min-width: 90px;
                flex-grow: 1;
                margin-bottom: 8px;
            }

            .block__list-item img {
                max-width: 100%;
            }

            .selector {
                width: 100%;
                height: 120px;
                background: lightgreen;
                position: relative;
                cursor: pointer;
                padding: 8px;
                margin-bottom: 8px;
            }

            .selector:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: calc(100% - 16px);
                height: calc(100% - 16px);
                display: block;
                margin: 8px;
                border: 1px dashed #333;
                transition: all 250ms ease-in-out;
            }

            .selector:hover:after {
                background: rgba(255,255,255,0.5);
            }

            .selector__field  {
                width: 100%;
                height: 100%;
                -webkit-appearance: none;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                z-index: 10;
                cursor: pointer;
            }

            .selector__meta {
                width: 100%;
                height: calc(100% - 16px);

                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                position: absolute;
                z-index: 5;
            }

            .selector__title {
                font-size: 1.210em;
            }

            .selector__subtitle {
                font-size: 0.62em;
                opacity: 0.5;
                /*font-style: italic;*/
            }

            .pictures-add__list {
                list-style: none;
            }

            .pictures-add__list-item  {

            }

            .pictures-add__controls {
                margin: 8px 0;
                padding: 8px;
                background: lightblue;
            }

            .list-item {

            }

            .list-item__image {
                max-width: 200px;
            }

            .list-images {
                /*background: lightblue;*/
                margin-bottom: 8px;
                /*padding: 8px 8px 0;*/
                flex-flow: row wrap;
                overflow: auto;
            }


            .button {
                border: none;
                outline: none;
                background: rgba(255,255,255,0.5);
                padding: 8px;
                cursor: pointer;
                width: 100%;
                color: #fff;
                margin-top: 8px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .button--condensed {
                margin: 0;
            }

            .button--submit {
                background: #077;
                margin: 0 0 8px;
            }

            .button--delete {
                background: rgba(255,0,0,0.5);
            }

            .select {
                /*max-width: 100%;*/
                width: 100%;
            }

            .input-field {
                border: none;
                border-bottom: 1px solid #ccc;
                background: #eee;
                padding: 8px;
                width: 100%;
                margin: 8px 0;
                outline: none;
                flex-shrink: 1;
                transition: all 100ms ease-in-out;
            /*}

            .input-field:focus {*/
                background: #fff;
                font-size: 1.2em;
            }

            .input-checkbox {
                margin-right: 8px;
            }

            .label {

            }

            .label__text {
                padding-top: 8px;
                padding-bottom: 16px;
                margin-left: 20px;
                font-size: 2.420em;
                display: inline-block;
                color: #333;
                display: none;
            }

            .navigation {
                /*padding: 8px;*/
                margin: 8px;
                background: #fff;
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
            }

            .navigation__link {
                text-align: center;
                width: 33.33%;
                display: inline-block;
                flex-grow: 1;
                flex-shrink: 1;
                font-size: 0.8em;
                text-decoration: none;
                padding: 8px;
                transition: all 100ms ease-in-out;
                background: #eee;
            }

            .router-link-active {
                background: #ade;
            }

            .categories {

            }

            .categories__add {

            }

            .categories__category {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .response {
                width: 100%;
                margin-bottom: 32px;
            }

            .response p {
                width: calc(100% - 220px);
                display: inline-block;
            }

            .response__photo {
                width: 200px;
                height: 201px;
                float: left;
                margin: 0 16px 8px 0;
                overflow: hidden;
                text-align: center;
                background: #ade;
            }

            .response__photo-image {
                max-height: 100%;
                object-fit: fit;
            }

            .response__name {
                font-size: 1.210em;
                text-transform: capitalize;
            }

            .response__date {
                font-style: italic;
                font-size: 0.8em;
                /*margin-bottom: 8px;*/
            }

            .response__controls {
                /*width: calc(100% - 220px);*/
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
            }

            .response__controls .button {
                width: 50%;
                margin: 0;
                flex-shrink: 1;
            }

            .response__fields {

            }

            .parameter__title {
                margin-top: 20px;
                display: block;
                margin-left: 8px;
                color: #777;
                font-size: 0.8em;
                margin-bottom: -8px;
        
        </style>

    </head>

    <body>

        <div id="app"></div>

        <script src="assets/manager/build.js"></script>

    </body>

</html>