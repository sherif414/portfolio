<script setup lang="ts">
import { ref } from 'vue'

const dataName = ref('')
const dataEmail = ref('')
const dataBody = ref('')
const showForm = ref(true)
const submitSuccess = ref(false)
const isSubmitting = ref(false)

const handleResend = () => {
  showForm.value = true
}

const handleSubmit = async () => {
  const body = {
    service_id: 'service_vku4618',
    template_id: 'template_2vf8mca',
    user_id: 'sD0cwBL60aBlLS6RA',
    template_params: {
      from_name: dataName.value,
      message_body: `message: ${dataBody.value} email :${dataEmail.value}`,
    },
  }

  isSubmitting.value = true
  showForm.value = false
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  submitSuccess.value = res.ok
  isSubmitting.value = false
}
</script>

<template>
  <main class="grid lg:grid-cols-12 text-3 2xl:text-4 lt-lg:(pt-2)">
    <!-- side menu -->

    <section class="lg:(col-span-2 border-r) ">
      <div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b mb-4">
        <i class="lg:i-ri-arrow-down-s-fill mr-2 " />contacts
      </div>
      <div class="flex pl-2 items-center">
        <i class="lg:i-ri-mail-fill mx-2" /> sherif.hassan.dev@gmail.com
      </div>
      <div class="flex pl-2 items-center">
        <i class="lg:i-ri-phone-fill mx-2" /> 0117446242
      </div>
      <div class="flex pl-2 items-center">
        <i class="lg:i-ri-phone-fill mx-2" /> 0994953238
      </div>
      <div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b my-4 border-t">
        <i class="lg:i-ri-arrow-down-s-fill mr-2 " />location
      </div>
      <div class="flex pl-2 items-center">
        <i class="lg:i-ri-map-pin-user-fill mx-2" />khartoum - sudan
      </div>
    </section>

    <!-- the form -->

    <section
      class="flex flex-col items-center justify-center lt-lg:(p-8 mt-8) lg:(px-[15%] col-span-4 border-r)"
    >
      <form v-if="showForm" class="grid grid-cols-1 w-full gap-6" @submit.prevent="handleSubmit">
        <div>
          <label class="font-bold" for="name">_name:</label>
          <input id="name" v-model="dataName" class="form-input" type="text">
        </div>
        <div>
          <label class="font-bold" for="email">_email:</label>
          <input id="email" v-model="dataEmail" class="form-input" type="email">
        </div>
        <div>
          <label class="font-bold" for="message">_message:</label>
          <textarea id="message" v-model="dataBody" class="form-input" name="" rows="6" />
        </div>
        <button
          class="bg-secondary-3 text-secondary-4 px-2 py-1 w-max rounded"
        >
          submit-form
        </button>
      </form>

      <template v-else>
        <div v-if="isSubmitting">
          sending..
        </div>

        <div v-if="!isSubmitting && submitSuccess" class="text-center">
          <div class="text-secondary-4">
            all good !
          </div>
          <div>thanks for reaching out</div>
          <div>I'll replay as soon as possible</div>
          <button
            class="bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1"
            @click="handleResend"
          >
            send another?
          </button>
        </div>

        <div v-if="!isSubmitting && !submitSuccess" class="text-center">
          <div>hmm something went wrong, try contacting me directly using my email address ..</div>
          <button
            class="bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1"
            @click="handleResend"
          >
            try again?
          </button>
        </div>
      </template>
    </section>

    <!-- code form -->

    <section
      class="col-span-6 flex flex-col items-center justify-center text-[.825rem] 2xl:text-5 lt-lg:hidden"
    >
      <div class="w-60ch text-secondary-3 break-words">
        1
        <span class="mr-8" /> <span class="text-accent-4">const</span> button =
        document.querySelector(<span
          class="text-accent-1"
        >'#submit-btn'</span>);
        <br>
        2
        <span class="mr-8" />
        <br>
        3
        <span class="mr-8" /> <span class="text-accent-4">const</span> message = {
        <br>
        4
        <span class="mr-8" /> name: <span class="text-accent-1">"{{ dataName }}"</span>,
        <br>
        5
        <span class="mr-8" /> email: <span class="text-accent-1">"{{ dataEmail }}"</span>,
        <br>
        6
        <span class="mr-8" /> message: <span class="text-accent-1">"{{ dataBody }}"</span>
        <br>
        7
        <span class="mr-8" /> }
        <br>
        8
        <span class="mr-8" />
        <br>
        9
        <span class="mr-8" /> button.addEventListener(<span class="text-accent-1">'click'</span>, ()
        <span class="text-accent-4">=></span> {
        <br>
        10
        <span class="mr-8" /> form.submit(<span class="text-accent-4">message</span>)
        <br>
        11
        <span class="mr-8" /> })
      </div>
    </section>
  </main>
</template>
