<template>
  <section id="about">
    <v-row class="px-md-6 py-12 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">About Me</h3>
      </v-col>
      <v-col cols="12" md="6" lg="5" xl="4" class="font-weight-light">
        I'm a junior full-stack developer, but currently focusing more on front
        end and back end developing, and after that i will improve my DevOps
        skill. I started learning about programming since mid 2017 and since
        then I've become passionate about programming.
      </v-col>
      <v-col cols="12" md="6" lg="7" xl="3" class="pl-md-12">
        <v-row>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fas', 'map-marker-alt']"
              />
            </div>
            <div>
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fas', 'envelope']"
              />
            </div>
          </v-col>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              Indonesia
            </div>
            <div>
              me@vincentjonathan.com
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12 "
        xl="4"
        class="mt-6 mt-lg-0"
        :class="!$vuetify.breakpoint.lgAndDown ? 'text-right pr-12' : ''"
      >
        <h4 class="title primary--text">Current Activity</h4>
        <transition name="fade" mode="out-in">
          <div
            class="font-weight-light body-1 py-3"
            :key="currentFile.fileName && fileIcon && isConnected"
          >
            <template v-if="isConnected && currentFile.fileName">
              <v-row no-gutters>
                <v-spacer v-if="!$vuetify.breakpoint.lgAndDown" />
                <transition name="fade" mode="out-in">
                  <v-col cols="auto" :key="currentFile.fileName">
                    <div class="mb-2">
                      {{ currentFile.fileName }}
                    </div>
                    <div class="body-2">
                      <transition name="fade" mode="out-in">
                        <span :key="sizeFormat.size">
                          {{ sizeFormat.size }}
                          <span class="overline">{{ sizeFormat.unit }}</span>
                        </span> </transition
                      >,
                      <transition name="fade" mode="out-in">
                        <span :key="currentFile.lineCount">
                          {{ currentFile.lineCount }}
                          <span class="overline">lines</span>
                        </span>
                      </transition>
                    </div>
                    <div class="caption">
                      <span>on project</span>
                      {{ currentFile.workspace }}
                    </div>
                  </v-col>
                </transition>
                <transition name="fade" mode="out-in">
                  <v-col
                    cols="auto"
                    class="px-3"
                    v-if="fileIcon"
                    :key="fileIcon"
                  >
                    <v-img
                      :src="require(`@/assets/icons/${fileIcon}.svg`)"
                      height="70"
                      width="70"
                    />
                  </v-col>
                </transition>
              </v-row>
            </template>
            <template v-else-if="isConnected">
              Idling
            </template>
            <template v-else>
              Offline
            </template>
          </div>
        </transition>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { getIcon } from "@/plugins/materialIcon";
import { Socket } from "vue-socket.io-extended";

@Component({})
export default class About extends Vue {
  currentFile = {};
  isConnected = false;

  sizes = ["bytes", "kb", "mb", "gb", "tb"];
  @Socket("activeFileChanged")
  updateFile(currentFile) {
    this.currentFile = currentFile;
  }

  @Socket("fileSaved")
  updateFileSize(savedFile) {
    if (savedFile.fileName !== this.currentFile.fileName) return;
    this.currentFile = {
      ...this.currentFile,
      ...savedFile
    };
  }

  @Socket()
  connected() {
    this.isConnected = true;
  }

  @Socket()
  disconnected() {
    this.isConnected = false;
  }

  get sizeFormat() {
    if (!this.currentFile.fileSize) return "0";
    let currentDivision = 0;
    let size = this.currentFile.fileSize;
    if (this.currentFile.fileSize > 1000) {
      size /= 1000;
      currentDivision++;
      while (size > 1000) {
        currentDivision++;
        size /= 1000;
      }
    }

    return {
      size: parseFloat(size.toFixed(2)),
      unit: this.sizes[currentDivision]
    };
  }
  get fileExtension() {
    if (!this.currentFile.fileName) return "";
    return this.currentFile.fileName.split(/\./g).pop();
  }
  get fileIcon() {
    if (!this.currentFile.fileName) return "";
    return getIcon(this.currentFile.fileName);
  }
}
</script>
